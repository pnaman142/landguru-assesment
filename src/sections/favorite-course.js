import { Box, Grid, Container } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import FavoriteCard from "components/favorite-card";
import fevCardImageOne from "assets/fev-course-1-1.png";
import fevCardImageTwo from "assets/fev-course-1-2.png";
import fevCardImageThree from "assets/fev-course-1-3.png";

const favoriteCourseData = [
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    image: fevCardImageOne,
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "g9avOpUOREM",
    starCount: 5,
  },
  {
    title:
      "Create multiple artboard by using figma prototyping tools development",
    image: fevCardImageTwo,
    reviewCount: "4.5 (524 reviews)",
    watchCount: "3,532 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 4,
  },
  {
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    image: fevCardImageThree,
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
  },
];

const FavoriteCourse = () => {
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Quality features"
          heading="Tutorials that people love most"
        />
        <Grid gap="50px 54px" columns={3} sx={styles.fevCourse.courseGrid}>
          {favoriteCourseData.map((course, index) => (
            <Box key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ["60px", null, null, "80px", "110px"],
    pb: [null, null, null, "30px", "50px", "0"],
    container: {
      maxWidth: 1440,
      "@media(max-width:1440px)": {
        maxWidth: 1240,
      },
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "30px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: 30,
      "@media(max-width: 991px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media(max-width: 575px)": {
        gridTemplateColumns: "1fr",
      },
    },
    col: {
      display: "flex",
    },
    courseGrid: {
      pt: 55,
      "@media screen and (max-width: 1366px)": {
        pt: 0,
      },
      "@media screen and (max-width: 1200px)": {
        gridGap: "50px 30px",
      },
      "@media screen and (max-width: 992px)": {
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "50px 50px",
      },
      "@media screen and (max-width: 480px)": {
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "35px 0",
      },
    },
  },
};
