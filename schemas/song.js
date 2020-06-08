export default {
  name: "song",
  title: "Song",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "album",
      title: "Album",
      type: "reference",
      to: { type: "album" },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "lyrics",
      title: "Lyrics",
      type: "blockContent",
    },
  ],
};
