// import { NotionContent } from "@/app/data/types";
// import TextLink from "@/components/links/TextLink";
// import NormalText from "@/components/text/NormalText";
// import Heading2 from "../text/Heading2";
// import Heading3 from "../text/Heading3";
// import Heading4 from "../text/Heading4";
const TextLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <a href={href}>{children}</a>;
};

const NormalText = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};

const Heading2 = ({ children }: { children: React.ReactNode }) => {
  return <h2>{children}</h2>;
};

const Heading3 = ({ children }: { children: React.ReactNode }) => {
  return <h3>{children}</h3>;
};

const Heading4 = ({ children }: { children: React.ReactNode }) => {
  return <h4>{children}</h4>;
};

type NotionBlock = {
  title: [string[]];
  type: string;
  id: string;
  properties: {
    [key: string]: [string[]];
  };
};

export function NotionBlockContent({ c: block }: { c: NotionBlock }) {
  const textSegments = block.title;
  if (!Array.isArray(textSegments)) {
    return <>{textSegments}</>;
  }

  const children = () => {
    return textSegments.map((segment, index) => {
      const [text, formatting] = segment;
      if (formatting === null) {
        return <span key={index}>{text}</span>;
      }

      if (formatting === undefined || formatting.length === 0) {
        return text;
      }

      // @ts-expect-error type is not correct
      const [format, formatValue] = formatting[0];

      switch (format) {
        case "b":
          return (
            <strong key={index} className="font-semibold">
              {text}
            </strong>
          );
        case "i":
          return (
            <em key={index} className="italic">
              {text}
            </em>
          );
        case "u":
        case "_":
          return <u key={index}>{text}</u>;
        case "s":
          return <s key={index}>{text}</s>;
        case "c":
          return (
            <code key={index} className="rounded bg-gray-100 px-1 font-mono">
              {text}
            </code>
          );
        case "a":
          return (
            <TextLink key={index} href={formatValue}>
              {text}
            </TextLink>
          );
        case "color":
          return (
            <span key={index} style={{ color: formatValue }}>
              {text}
            </span>
          );
        case "bg":
          return (
            <span key={index} style={{ backgroundColor: formatValue }}>
              {text}
            </span>
          );
        default:
          return <span key={index}>{text}</span>;
      }
    });
  };

  const renderContent = () => {
    const childContent = children();

    switch (block.type) {
      case "text":
        return <NormalText>{childContent}</NormalText>;
      case "header":
        return <Heading2>{childContent}</Heading2>;
      case "sub_header":
        return <Heading3>{childContent}</Heading3>;
      case "sub_sub_header":
        return <Heading4>{childContent}</Heading4>;
      case "bulleted_list":
        return <NormalText>{childContent}</NormalText>;
      case "numbered_list":
        return <NormalText>{childContent}</NormalText>;
      case "table_row":
        return <tr>{childContent}</tr>;
      case "code":
        return (
          <code className="rounded bg-gray-100 px-2 py-1 font-mono">
            {childContent}
          </code>
        );
      case "callout":
        return <NormalText>{childContent}</NormalText>;
      default:
        return <NormalText>{childContent}</NormalText>;
    }
  };
  // @ts-expect-error type is not correct
  if (textSegments.length === 0) {
    return null;
  }

  return renderContent();
}
