import React from "react";
import { FacebookIcon, WhatsappIcon, PinterestIcon } from "react-share";
import {
  FacebookShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  FacebookShareCount,
} from "react-share";
// import {}

function SocialTest() {
  return (
    <div>
      <FacebookShareButton
        url="https://firebasestorage.googleapis.com/v0/b/form-ce618.appspot.com/o/42.jpg?alt=media&token=bce7b574-282d-47bc-9408-b291556e8358"
        quote={"App Testing"}
        hashtag="#AppTest"
      >
        <FacebookIcon round={true} />
      </FacebookShareButton>

      <FacebookShareCount url="https://firebasestorage.googleapis.com/v0/b/form-ce618.appspot.com/o/42.jpg?alt=media&token=bce7b574-282d-47bc-9408-b291556e8358" />

      <WhatsappShareButton
        title="Johnee"
        separator=""
        url="https://firebasestorage.googleapis.com/v0/b/form-ce618.appspot.com/o/42.jpg?alt=media&token=bce7b574-282d-47bc-9408-b291556e8358"
      >
        <WhatsappIcon round={true} />
      </WhatsappShareButton>

      <PinterestShareButton
        url="https://firebasestorage.googleapis.com/v0/b/form-ce618.appspot.com/o/42.jpg?alt=media&token=bce7b574-282d-47bc-9408-b291556e8358"
        media="https://firebasestorage.googleapis.com/v0/b/form-ce618.appspot.com/o/42.jpg?alt=media&token=bce7b574-282d-47bc-9408-b291556e8358"
        description="This is John"
      >
        <PinterestIcon round={true} />
      </PinterestShareButton>
    </div>
  );
}

export default SocialTest;
