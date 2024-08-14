/* eslint-disable @typescript-eslint/no-explicit-any */
const imageBB = async (data: any): Promise<string | null> => {
    try {
      const image_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`;
  
      const formData = new FormData();
      formData.append("image", data);
  
      const response = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      });
  
      const imageResponse = await response.json();
  
      if (imageResponse.success) {
        const imageURL = imageResponse?.data?.display_url;
        console.log(imageURL, 'hello');
        return imageURL;
      } else {
        console.error("Image upload failed:", imageResponse);
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };
  
  export default imageBB;
  