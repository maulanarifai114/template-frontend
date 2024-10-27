import { ResizeOptions } from "sharp";
import { getBase64 } from "./get-base64";
import { ResizeImageResponse } from "@/app/api/resize-image/route";

export const getBase64Resized = async (file: File, options: ResizeOptions = { width: 1920, height: 1080, fit: "cover" }): Promise<string> => {
  const base64 = await getBase64(file);

  const response = await fetch("/api/resize-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options,
      image: base64,
    }),
  });
  const json: ResizeImageResponse = await response.json();
  return json.base64;
  // const resizedImageBuffer = await sharp(await getBuffer(file))
  //   .resize(options)
  //   .toBuffer();
  // const base64 = await getBase64(new Blob([resizedImageBuffer]));
  // return base64;
};
