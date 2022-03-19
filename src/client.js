import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '5rfdcv8y', // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: skGbLlWr12lMhvTwylwtw6rOjgQQV3e2S3JY6iuxxONNfozCUI1g9vLXZZrfXwjXjmfQcfSfec2DfUGkEmeWtFgkX95Ha7bnhryV9Td4mO1JGB6hZaJUeLlDCd0zFqZNacgIvxAKOZFs7ZrTzkAXPqkUKZjKNy2SHU5DO7IMBqRQPUFKdWdL
  });