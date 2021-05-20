import React from "react";
import { FacebookIcon } from "react-share";
import { FacebookShareButton } from "react-share";
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
    </div>
  );
}

export default SocialTest;
