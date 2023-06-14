module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "jimmy-bustillo",
        api_key: "473117699131922",
        api_secret: "N7sQk4P6OaKxJ8JzQcQncATfNqc",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
