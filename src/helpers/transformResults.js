export const transformResults = (images) => {
  return images.map((image) => ({
    id: image.id,
    description: image.description,
    urls: {
      regular: image.urls.regular,
      small: image.urls.small,
    },
  }));
};
