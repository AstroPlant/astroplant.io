export default {
  name: "cta",
  title: "Call to Action",
  type: "document",
  fields: [
    {
      name: "cover",
      title: "Cover",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      source: "title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
