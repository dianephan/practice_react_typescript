import React from 'react';
import CustomImageComponent from "./CustomImageComponent";

interface Props {
  alt: string;
  className: string;
  imageClassName: string;
  src: string;
}

const ProfilePictureStyling: React.FC<{className: string}> = ({className}) => (
  <style jsx global>{`
    .${className} {
      border-radius: 50%;
      object-fit: cover;
    }
  `}</style>
)

const ProfilePictureComponent: React.FC<Props> = ({
  alt,
  className,
  imageClassName,
  src
}) => (
  // <div className={`flex-container ${className}`}>
  <div className={className}>
    <CustomImageComponent 
      alt={alt}
      className={imageClassName}
      height="50px"
      src={src}
      width="50px"
    >
      <ProfilePictureStyling className={imageClassName}/>
    </CustomImageComponent>
  </div>
);

export default ProfilePictureComponent;