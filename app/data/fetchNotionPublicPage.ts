import * as cheerio from "cheerio";
import axios from "axios";
import { type Page } from "./pageTypes";

export async function fetchNotionPublicPage(url: string): Promise<Page> {
  try {
    // Fetch the HTML content using axios with a specific User-Agent
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      },
    });
    const html = response.data; // axios automatically provides the response body in .data

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    // Find the script tag containing the serverSidePrefetchData
    let prefetchData: object | null = null;

    // Look through script tags
    $("script").each((i, script) => {
      const content = $(script).text() || "";

      if (content.includes("window.__serverSidePrefetchData")) {
        console.log("Found script with serverSidePrefetchData");

        // Manual extraction approach
        const startMarker = "window.__serverSidePrefetchData = ";
        const startIndex = content.indexOf(startMarker);

        if (startIndex !== -1) {
          // Find the position right after the marker
          const jsonStartIndex = startIndex + startMarker.length;

          try {
            // Try to parse the JSON manually by finding its boundaries
            let bracketCount = 0;
            let inQuote = false;
            let escapeNext = false;
            let endIndex = -1;

            for (let i = jsonStartIndex; i < content.length; i++) {
              const char = content[i];

              if (escapeNext) {
                escapeNext = false;
                continue;
              }

              if (char === "\\") {
                escapeNext = true;
                continue;
              }

              if (char === '"' && !escapeNext) {
                inQuote = !inQuote;
                continue;
              }

              if (!inQuote) {
                if (char === "{") bracketCount++;
                if (char === "}") {
                  bracketCount--;
                  if (bracketCount === 0) {
                    endIndex = i + 1;
                    break;
                  }
                }
              }
            }

            if (endIndex !== -1) {
              const jsonString = content.substring(jsonStartIndex, endIndex);
              prefetchData = JSON.parse(jsonString);
              console.log("Successfully parsed prefetchData");
            } else {
              console.error("Failed to find the end of the JSON object");
            }
          } catch (e) {
            console.error("Failed to parse prefetchData JSON:", e);
          }
        } else {
          console.error("Start marker not found");
        }
      }
    });

    if (!prefetchData) {
      throw new Error("No prefetch data found");
    }

    return prefetchData as Page;
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    throw error;
  }
}
