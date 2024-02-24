import React, { useEffect } from "react";
import NavBar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import Footer from "../../components/Footer";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from "@mui/lab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
function Single() {
  const imageUrls = [
    "../../../public/house1.jpg",
    "../../../public/house2.jpg",
    "../../../public/house3.jpg",
    "../../../public/house4.jpg",
    "../../../public/house5.jpg",
    "../../../public/house6.jpg",
    "../../../public/house7.jpg",
  ];

  // Render function to map over the image URLs and render the images
  const renderImages = () => {
    return imageUrls.map((imageUrl, index) => (
      <div key={index}>
        <img
          className="w-full object-cover"
          src={imageUrl}
          alt={`Carousel Image ${index}`}
        />
      </div>
    ));
  };

  const renderThumbs = () => {
    return imageUrls.map((thumbUrl, index) => (
      <img
        key={index}
        className="inline-block"
        style={{ width: "100px", height: "3rem" }}
        src={thumbUrl}
        alt={`Thumbnail ${index}`}
      />
    ));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <NavBar />
      <div className="relative">
        <Carousel
          className="h-full"
          infiniteLoop={true}
          showArrows={true}
          showThumbs={true}
          showStatus={false}
          dynamicHeight={true}
          stopOnHover={true}
          renderThumbs={() => renderThumbs()} // Pass the renderThumbs function
        >
          {/* Render images dynamically */}

          {renderImages()}
        </Carousel>
      </div>
      <div className="border border-red-700 py-5 px-5">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color={"primary"}>
                <LocationOnOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Location
              </Typography>
              <Typography>No 254 T.Y Danjuma Cresent Guzape Abuja</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SellOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Price
              </Typography>
              <Typography>₦ 250,000,000</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <HomeOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Property Type
              </Typography>
              <Typography>Manson</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <StraightenOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Property Size
              </Typography>
              <Typography>335.8 Squre Meter</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WeekendOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Sitting Rooms
              </Typography>
              <Typography>4 sitting Rooms</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <BedOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Master Bedrooms
              </Typography>
              <Typography>2 Master Bedrooms</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <HotelOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Bedrooms
              </Typography>
              <Typography>5 Bedrooms</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <BathtubOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color={"primary"}>
                Restrooms
              </Typography>
              <Typography> 7 Restrooms</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <Footer />
    </>
  );
}

export default Single;
