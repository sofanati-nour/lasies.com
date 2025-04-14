import cachedGetNotionDatabase from "./app/data/cachedGetNotionDatabase";

const data = await cachedGetNotionDatabase("1d142f09-f986-80eb-84d7-d5a80a48ed74");

console.log(data);
