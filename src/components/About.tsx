import { Box, Container, Typography, useTheme } from "@mui/material";
import { StickyNote2 } from "@mui/icons-material";
import { Heading } from "./Helpers";
import { useResponsive } from "../hooks/useResponsive";

// const educationData = [
//   {
//     title: "Diploma of IT",
//     institution: "Coder Academy 2023",
//     description: "The study of full stack web development",
//   },
//   {
//     title: "Bachelor of Audio Production",
//     institution: "SAE 2014",
//     description: "The study of live and studio audio production",
//   },
// ];

// const experienceData = [
//   {
//     title: "Telecommunication Services Australia",
//     role: "Developer & Business Analyst",
//     period: "2025 - Present",
//   },
//   {
//     title: "Pixel Technologies",
//     role: "Full Stack Web Developer",
//     period: "2024 - 2025",
//   },
// ];

const About = () => {
  const theme = useTheme();
  const isMobile = useResponsive();

  return (
    <Box
      sx={{
        m: { xs: 2, sm: 0 },
        py: isMobile ? 4 : 8,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container
        sx={{
          maxWidth: {
            xl: "xl",
            md: "md",
          },
        }}
      >
        <Heading title="About me" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <StickyNote2
            sx={{ fontSize: 20, color: theme.palette.techChip.background }}
          />
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Bio
          </Typography>
        </Box>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            fontSize: 16,
          }}
        >
          I'm a full stack web developer and audio producer who loves problem
          solving and being creative. My passion for creativity started early in
          life through music, and my love for analytical thinking and attention
          to detail translated seamlessly as I changed careers into full stack
          web development.
        </Typography>
      </Container>
    </Box>
  );
};

// const Background = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         py: 8,
//         bgcolor: theme.palette.background.paper,
//       }}
//     >
//       <Container>
//         <Box sx={{ mb: 2 }}>
//           <Typography
//             sx={{
//               mb: 2,
//               fontWeight: 600,
//               fontSize: 28,
//               position: "relative",
//               display: "inline-block",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 bottom: -2,
//                 left: 2,
//                 width: 50,
//                 height: 4,
//                 backgroundColor: theme.palette.techChip.background,
//                 borderRadius: 2,
//               },
//             }}
//           >
//             Background
//           </Typography>
//         </Box>
//         <Box sx={{ mb: 6 }}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 2 }}>
//             <StickyNote2
//               sx={{ fontSize: 20, color: theme.palette.techChip.background }}
//             />
//             <Typography
//               sx={{
//                 fontSize: 18,
//                 fontWeight: 500,
//               }}
//             >
//               Bio
//             </Typography>
//           </Box>
//           <Typography
//             sx={{
//               color: theme.palette.text.secondary,
//               lineHeight: 1.6,
//               fontSize: 16,
//             }}
//           >
//             I'm a full stack web developer and audio producer who loves problem
//             solving and being creative. My passion for creativity started early
//             in life through music, and my love for analytical thinking and
//             attention to detail translated seamlessly as I changed careers into
//             full stack web development.
//           </Typography>
//         </Box>
//         <Grid container spacing={2}>
//           {/* Education Section */}
//           <Grid size={{ xs: 12, md: 4.5 }}>
//             <Box
//               sx={{
//                 border: `1px solid ${theme.palette.border.primary}`,
//                 borderRadius: 3,
//                 p: 4,
//                 bgcolor: theme.palette.background.paper,
//                 height: "100%",
//               }}
//             >
//               <Box
//                 sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}
//               >
//                 <SchoolOutlined
//                   sx={{
//                     color: theme.palette.techChip.background,
//                     fontSize: 24,
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: 18,
//                     fontWeight: 500,
//                   }}
//                 >
//                   Education
//                 </Typography>
//               </Box>

//               {educationData.map((item, index) => (
//                 <Box
//                   key={index}
//                   sx={{ mb: index < educationData.length - 1 ? 4 : 0 }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: 18,
//                       fontWeight: 600,
//                     }}
//                   >
//                     {item.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       color: theme.palette.text.secondary,
//                     }}
//                   >
//                     {item.institution}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       color: theme.palette.text.secondary,
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     {item.description}
//                   </Typography>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>

//           {/* Experience Section */}
//           <Grid size={{ xs: 12, md: 4.5 }}>
//             <Box
//               sx={{
//                 border: `1px solid ${theme.palette.border.primary}`,
//                 borderRadius: 3,
//                 p: 4,
//                 bgcolor: theme.palette.background.paper,
//                 height: "100%",
//               }}
//             >
//               <Box
//                 sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}
//               >
//                 <WorkHistoryOutlined
//                   sx={{
//                     color: theme.palette.techChip.background,
//                     fontSize: 24,
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: 18,
//                     fontWeight: 500,
//                   }}
//                 >
//                   Work
//                 </Typography>
//               </Box>

//               {experienceData.map((item, index) => (
//                 <Box
//                   key={index}
//                   sx={{ mb: index < experienceData.length - 1 ? 4 : 0 }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: 18,
//                       fontWeight: 600,
//                     }}
//                   >
//                     {item.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       color: theme.palette.text.secondary,
//                     }}
//                   >
//                     {item.role}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       lineHeight: 1.5,
//                       color: theme.palette.text.secondary,
//                     }}
//                   >
//                     {item.period}
//                   </Typography>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//           <Grid size={{ xs: 12, md: 3 }}>
//             <Box
//               sx={{
//                 border: `1px solid ${theme.palette.border.primary}`,
//                 borderRadius: 3,
//                 p: 4,
//                 bgcolor: theme.palette.background.paper,
//                 height: "100%",
//               }}
//             >
//               <Box
//                 sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}
//               >
//                 <AccessTime
//                   sx={{
//                     color: theme.palette.techChip.background,
//                     fontSize: 24,
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: 18,
//                     fontWeight: 500,
//                   }}
//                 >
//                   Experience
//                 </Typography>
//               </Box>

//               <Typography
//                 sx={{
//                   fontSize: 16,
//                 }}
//               >
//                 Web developer
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: 14,
//                   color: theme.palette.text.secondary,
//                   mb: 3,
//                 }}
//               >
//                 1 Year +
//               </Typography>
//               <Typography>Audio producer</Typography>
//               <Typography
//                 sx={{
//                   fontSize: 14,
//                   color: theme.palette.text.secondary,
//                   mb: 3,
//                 }}
//               >
//                 15 years +
//               </Typography>
//               <Typography>Musician</Typography>
//               <Typography
//                 sx={{
//                   fontSize: 14,
//                   color: theme.palette.text.secondary,
//                 }}
//               >
//                 30 years +
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

export default About;
