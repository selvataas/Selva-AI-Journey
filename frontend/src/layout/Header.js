import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth"; // Firebase'den signInWithPopup fonksiyonunu import edin
import { auth, provider } from "../firebase"; // Firebase yapılandırma dosyasını import edin
library.add(faRobot);
import CustomButton from "../components/CustomButton";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // Google ile başarılı bir şekilde giriş yapıldığında yapmanız gerekenler
      handleClose();
    } catch (error) {
      console.error("Google ile giriş yapılamadı:", error);
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger ? theme.palette.background.default : "transparent",
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{
              color: theme.palette.primary.main,
              display: { xs: "block", md: "none" }
            }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton size="large" disabled>
              <FontAwesomeIcon
                icon={faRobot}
                style={{
                  color: theme.palette.primary.main,
                  height: 45,
                  width: 45
                }}
              />
              <Typography
                variant="h3"
                component="div"
                sx={{
                  flexGrow: 1,
                  marginLeft: "10px",
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: { md: "inline", xs: "none" }
                }}
              >
                Selva's AI Journey
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              alignItems: "center",
              display: { md: "flex", xs: "none" }
            }}
          >
            <CustomButton href="#home" text="Home" />
            <CustomButton href="#about" text="About" />
            <CustomButton href="#projects" text="Projects" />
            <CustomButton href="#technologies" text="Technologies" />
            <CustomButton href="#testimonials" text="Testimonials" />
            <CustomButton href="#contact" text="Contact" />
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: 32,
              mx: 2,
              display: { lg: "flex", md: "none", xs: "none" }
            }}
          />
          <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
            <IconButton
              aria-label="Github"
              href="https://github.com/selvataas"
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/selvatas/"
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://www.instagram.com/selvataas/"
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://x.com/selvataas"
              target="_blank"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Box>
          <Button color="primary" variant="contained" onClick={handleOpen}>
            Login
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Login
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/* Login form goes here */}
                <form>
                  <div>
                    <label>
                      Email:
                      <input type="email" name="email" />
                    </label>
                  </div>
                  <div>
                    <label>
                      Password:
                      <input type="password" name="password" />
                    </label>
                  </div>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleGoogleSignIn} sx={{ mt: 2 }}>
                    Sign in with Google
                  </Button>
                </form>
              </Typography>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;



// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { useTheme } from "@mui/material/styles";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MenuIcon from "@mui/icons-material/Menu";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faRobot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(faRobot);
// import CustomButton from "../components/CustomButton";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const Header = ({ onSidebarOpen }) => {
//   const theme = useTheme();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 38,
//   });
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <React.Fragment>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 1 : 0}
//         sx={{
//           top: 0,
//           border: 0,
//           backgroundColor: trigger ? theme.palette.background.default : "transparent",
//         }}
//       >
//         <Toolbar sx={{ minHeight: 70 }}>
//           <IconButton
//             onClick={() => onSidebarOpen()}
//             aria-label="Menu"
//             sx={{
//               color: theme.palette.primary.main,
//               display: { xs: "block", md: "none" }
//             }}
//           >
//             <MenuIcon fontSize="medium" />
//           </IconButton>
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <IconButton size="large" disabled>
//               <FontAwesomeIcon
//                 icon={faRobot}
//                 style={{
//                   color: theme.palette.primary.main,
//                   height: 45,
//                   width: 45
//                 }}
//               />
//               <Typography
//                 variant="h3"
//                 component="div"
//                 sx={{
//                   flexGrow: 1,
//                   marginLeft: "10px",
//                   color: theme.palette.primary.main,
//                   fontWeight: 700,
//                   textDecoration: "none",
//                   display: { md: "inline", xs: "none" }
//                 }}
//               >
//                 Selva's AI Journey
//               </Typography>
//             </IconButton>
//           </Link>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box
//             sx={{
//               alignItems: "center",
//               display: { md: "flex", xs: "none" }
//             }}
//           >
//             <CustomButton href="#home" text="Home" />
//             <CustomButton href="#about" text="About" />
//             <CustomButton href="#projects" text="Projects" />
//             <CustomButton href="#technologies" text="Technologies" />
//             <CustomButton href="#testimonials" text="Testimonials" />
//             <CustomButton href="#contact" text="Contact" />
//           </Box>
//           <Divider
//             orientation="vertical"
//             sx={{
//               height: 32,
//               mx: 2,
//               display: { lg: "flex", md: "none", xs: "none" }
//             }}
//           />
//           <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
//             <IconButton
//               aria-label="Github"
//               href="https://github.com/selvataas"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <GitHubIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="LinkedIn"
//               href="https://www.linkedin.com/in/selvatas/"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Instagram"
//               href="https://www.instagram.com/selvataas/"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <InstagramIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Twitter"
//               href="https://x.com/selvataas"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <TwitterIcon fontSize="large" />
//             </IconButton>
//           </Box>
//           <Button color="primary" variant="contained" onClick={handleOpen}>
//             Login
//           </Button>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Login
//               </Typography>
//               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 {/* Login form goes here */}
//                 <form>
//                   <div>
//                     <label>
//                       Email:
//                       <input type="email" name="email" />
//                     </label>
//                   </div>
//                   <div>
//                     <label>
//                       Password:
//                       <input type="password" name="password" />
//                     </label>
//                   </div>
//                   <Button type="submit" variant="contained" color="primary">
//                     Submit
//                   </Button>
//                 </form>
//               </Typography>
//             </Box>
//           </Modal>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// Header.propTypes = {
//   onSidebarOpen: PropTypes.func,
// };

// export default Header;























// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { useTheme } from "@mui/material/styles";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MenuIcon from "@mui/icons-material/Menu";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRobot } from "@fortawesome/free-solid-svg-icons";
// import CustomButton from "../components/CustomButton";
// // import GoogleLogin from "react-google-login";
// // import GitHubLogin from "react-github-login";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const Header = ({ onSidebarOpen }) => {
//   const theme = useTheme();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 38,
//   });

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleGoogleSuccess = (response) => {
//     console.log(response);
//     // Google ile başarılı giriş durumunda burada işlemler yapabilirsiniz
//   };

//   const handleGoogleFailure = (response) => {
//     console.error(response);
//     // Google girişinde hata oluştuğunda burada işlemler yapabilirsiniz
//   };

//   const handleGithubSuccess = (response) => {
//     console.log(response);
//     // GitHub ile başarılı giriş durumunda burada işlemler yapabilirsiniz
//   };

//   const handleGithubFailure = (response) => {
//     console.error(response);
//     // GitHub girişinde hata oluştuğunda burada işlemler yapabilirsiniz
//   };

//   return (
//     <React.Fragment>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 1 : 0}
//         sx={{
//           top: 0,
//           border: 0,
//           backgroundColor: trigger
//             ? theme.palette.background.default
//             : "transparent",
//         }}
//       >
//         <Toolbar sx={{ minHeight: 70 }}>
//           <IconButton
//             onClick={() => onSidebarOpen()}
//             aria-label="Menu"
//             sx={{
//               color: theme.palette.primary.main,
//               display: { xs: "block", md: "none" },
//             }}
//           >
//             <MenuIcon fontSize="medium" />
//           </IconButton>
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <IconButton size="large" disabled>
//               <FontAwesomeIcon
//                 icon={faRobot}
//                 style={{
//                   color: theme.palette.primary.main,
//                   height: 45,
//                   width: 45,
//                 }}
//               />
//               <Typography
//                 variant="h3"
//                 component="div"
//                 sx={{
//                   flexGrow: 1,
//                   marginLeft: "10px",
//                   color: theme.palette.primary.main,
//                   fontWeight: 700,
//                   textDecoration: "none",
//                   display: { md: "inline", xs: "none" },
//                 }}
//               >
//                 Selva'nın Yapay Zeka Macerası
//               </Typography>
//             </IconButton>
//           </Link>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box
//             sx={{
//               alignItems: "center",
//               display: { md: "flex", xs: "none" },
//             }}
//           >
//             <CustomButton href="#home" text="Ana Sayfa" />
//             <CustomButton href="#about" text="Hakkında" />
//             <CustomButton href="#projects" text="Projeler" />
//             <CustomButton href="#technologies" text="Teknolojiler" />
//             <CustomButton href="#testimonials" text="Referanslar" />
//             <CustomButton href="#contact" text="İletişim" />
//           </Box>
//           <Divider
//             orientation="vertical"
//             sx={{
//               height: 32,
//               mx: 2,
//               display: { lg: "flex", md: "none", xs: "none" },
//             }}
//           />
//           <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
//             <IconButton
//               aria-label="Github"
//               href="https://github.com/selvataas"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <GitHubIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="LinkedIn"
//               href="https://www.linkedin.com/in/selvatas/"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Instagram"
//               href="https://www.instagram.com/selvataas/"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <InstagramIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Twitter"
//               href="https://x.com/selvataas"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <TwitterIcon fontSize="large" />
//             </IconButton>
//           </Box>
//           <Button color="primary" variant="contained" onClick={handleOpen}>
//             Giriş Yap
//           </Button>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Typography
//                 id="modal-modal-title"
//                 variant="h6"
//                 component="h2"
//               >
//                 Giriş Yap
//               </Typography>
//               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 <form>
//                   <div>
//                     <label>
//                       Email:
//                       <input type="email" name="email" />
//                     </label>
//                   </div>
//                   <div>
//                     <label>
//                       Şifre:
//                       <input type="password" name="password" />
//                     </label>
//                   </div>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                   >
//                     Gönder
//                   </Button>
//                 </form>
//                 {/* <GoogleLogin
//                   clientId="Sizin_Google_Client_ID'niz"
//                   onSuccess={handleGoogleSuccess}
//                   onFailure={handleGoogleFailure}
//                   buttonText="Google ile Giriş Yap"
//                   cookiePolicy={'single_host_origin'}
//                 /> */}
//                 <GitHubLogin
//                   clientId="Sizin_GitHub_Client_ID'niz"
//                   onSuccess={handleGithubSuccess}
//                   onFailure={handleGithubFailure}
//                   buttonText="GitHub ile Giriş Yap"
//                   redirectUri="http://localhost:3000" // GitHub App'te ayarladığınız callback URL
//                 />
//               </Typography>
//             </Box>
//           </Modal>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// Header.propTypes = {
//   onSidebarOpen: PropTypes.func,
// };

// export default Header;


// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { useTheme } from "@mui/material/styles";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MenuIcon from "@mui/icons-material/Menu";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRobot } from "@fortawesome/free-solid-svg-icons";
// import CustomButton from "../components/CustomButton";
// import GoogleLogin from "react-google-login";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const Header = ({ onSidebarOpen }) => {
//   const theme = useTheme();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 38,
//   });

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleGoogleSuccess = (response) => {
//     console.log(response);
//     // Google ile başarılı giriş durumunda burada işlemler yapabilirsiniz
//   };

//   const handleGoogleFailure = (response) => {
//     console.error(response);
//     // Google girişinde hata oluştuğunda burada işlemler yapabilirsiniz
//   };

//   const handleFacebookSuccess = (response) => {
//     console.log(response);
//     // Facebook ile başarılı giriş durumunda burada işlemler yapabilirsiniz
//   };

//   const handleFacebookFailure = (response) => {
//     console.error(response);
//     // Facebook girişinde hata oluştuğunda burada işlemler yapabilirsiniz
//   };

//   return (
//     <React.Fragment>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 1 : 0}
//         sx={{
//           top: 0,
//           border: 0,
//           backgroundColor: trigger
//             ? theme.palette.background.default
//             : "transparent",
//         }}
//       >
//         <Toolbar sx={{ minHeight: 70 }}>
//           <IconButton
//             onClick={() => onSidebarOpen()}
//             aria-label="Menu"
//             sx={{
//               color: theme.palette.primary.main,
//               display: { xs: "block", md: "none" },
//             }}
//           >
//             <MenuIcon fontSize="medium" />
//           </IconButton>
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <IconButton size="large" disabled>
//               <FontAwesomeIcon
//                 icon={faRobot}
//                 style={{
//                   color: theme.palette.primary.main,
//                   height: 45,
//                   width: 45,
//                 }}
//               />
//               <Typography
//                 variant="h3"
//                 component="div"
//                 sx={{
//                   flexGrow: 1,
//                   marginLeft: "10px",
//                   color: theme.palette.primary.main,
//                   fontWeight: 700,
//                   textDecoration: "none",
//                   display: { md: "inline", xs: "none" },
//                 }}
//               >
//                 Selva'nın Yapay Zeka Macerası
//               </Typography>
//             </IconButton>
//           </Link>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box
//             sx={{
//               alignItems: "center",
//               display: { md: "flex", xs: "none" },
//             }}
//           >
//             <CustomButton href="#home" text="Ana Sayfa" />
//             <CustomButton href="#about" text="Hakkında" />
//             <CustomButton href="#projects" text="Projeler" />
//             <CustomButton href="#technologies" text="Teknolojiler" />
//             <CustomButton
//               href="#testimonials"
//               text="Referanslar"
//             />
//             <CustomButton href="#contact" text="İletişim" />
//           </Box>
//           <Divider
//             orientation="vertical"
//             sx={{
//               height: 32,
//               mx: 2,
//               display: { lg: "flex", md: "none", xs: "none" },
//             }}
//           />
//           <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
//             <IconButton
//               aria-label="Github"
//               href="https://github.com/selvataas"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <GitHubIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="LinkedIn"
//               href="https://www.linkedin.com/in/selvatas/"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Instagram"
//               href="https://www.instagram.com/selvataas/"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <InstagramIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Twitter"
//               href="https://x.com/selvataas"
//               target="_blank"
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <TwitterIcon fontSize="large" />
//             </IconButton>
//           </Box>
//           <Button
//             color="primary"
//             variant="contained"
//             onClick={handleOpen}
//           >
//             Giriş Yap
//           </Button>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Typography
//                 id="modal-modal-title"
//                 variant="h6"
//                 component="h2"
//               >
//                 Giriş Yap
//               </Typography>
//               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 <form>
//                   <div>
//                     <label>
//                       Email:
//                       <input type="email" name="email" />
//                     </label>
//                   </div>
//                   <div>
//                     <label>
//                       Şifre:
//                       <input type="password" name="password" />
//                     </label>
//                   </div>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                   >
//                     Gönder
//                   </Button>
//                 </form>
//                 <GoogleLogin
//                   clientId="Sizin_Google_Client_ID'niz"
//                   onSuccess={handleGoogleSuccess}
//                   onFailure={handleGoogleFailure}
//                   buttonText="Google ile Giriş Yap"
//                   cookiePolicy={'single_host_origin'}
//                 />
//               </Typography>
//             </Box>
//           </Modal>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// Header.propTypes = {
//   onSidebarOpen: PropTypes.func,
// };

// export default Header;




// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { useTheme } from "@mui/material/styles";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MenuIcon from "@mui/icons-material/Menu";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter"
// // Font Awesome Icons
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faRobot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(faRobot);


// //My icons
// // import { ReactComponent as MyLogo } from '../assets/logo/mylogo.ico';

// import CustomButton from "../components/CustomButton";

// const Header = ({ onSidebarOpen }) => {
//   const theme = useTheme();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 38,
//   });
  
//   return (
//     <React.Fragment>
//       <AppBar
//         position="sticky"
//         elevation={trigger ? 1 : 0}
//         sx={{
//           top: 0,
//           border: 0,
//           backgroundColor: trigger ? theme.palette.background.default : "transparent",
//         }}
//       >
//         <Toolbar sx={{ minHeight: 70 }}>
//           <IconButton 
//             onClick={() => onSidebarOpen()}
//             aria-label="Menu"
//             sx={{ 
//               color: theme.palette.primary.main,
//               display: { xs: "block", md: "none" } 
//             }}
//           >
//             <MenuIcon fontSize="medium" />
//           </IconButton>
//           <Link href="/" style={{ textDecoration: "none" }}>
//             <IconButton size="large" disabled>

//             {/* <img
//               src={process.env.PUBLIC_URL + '/mylogo.ico'}
//               alt="My Logo"
//               style={{
//                 color: theme.palette.primary.main,
//                 height: 90,
//                 width: 90
//               }}
//             /> */}
            
//               <FontAwesomeIcon 
//                 icon={faRobot} 
//                 style={{ 
//                   color: theme.palette.primary.main,
//                   height: 45, 
//                   width: 45
//                 }} 
//               />

              
//               {/* <MyLogo
//                 style={{
//                   color: theme.palette.primary.main,
//                   height: 250,
//                   width: 250
//                 }}
//               /> */}

//               <Typography 
//                 variant="h3" 
//                 component="div" 
//                 sx={{ 
//                   flexGrow: 1,
//                   marginLeft: "10px",
//                   color: theme.palette.primary.main,
//                   fontWeight: 700,
//                   textDecoration: "none",
//                   display: { md: "inline", xs: "none" }
//                 }}
//               >
//                 Selva's AI Journey
//               </Typography>

//             </IconButton>
//           </Link>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box 
//             sx={{ 
//               alignItems: "center",
//               display: { md: "flex", xs: "none" } 
//             }}
//           >
//             <CustomButton 
//               href="#home"
//               text="Home"
//             />
//             <CustomButton 
//               href="#about"
//               text="About"
//             />
//             <CustomButton 
//               href="#projects"
//               text="Projects"
//             />
//             <CustomButton 
//               href="#technologies"
//               text="Technologies"
//             />
//             <CustomButton
//               href="#testimonials"
//               text="Testimonials"
//             />
//             <CustomButton 
//               href="#contact"
//               text="Contact"
//             />
//           </Box>
//           <Divider
//             orientation="vertical"
//             sx={{ 
//               height: 32, 
//               mx: 2,
//               display: { lg: "flex", md: "none", xs: "none" } 
//             }} 
//           />
//           <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
//             <IconButton 
//               aria-label="Github" 
//               href="https://github.com/selvataas"
//               target="_blank"
//               sx={{ 
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <GitHubIcon fontSize="large" />
//             </IconButton>
//             <IconButton 
//               aria-label="LinkedIn" 
//               href="https://www.linkedin.com/in/selvatas/"
//               target="_blank"
//               sx={{ 
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </IconButton>
//             <IconButton 
//               aria-label="Instagram" 
//               href="https://www.instagram.com/selvataas/"
//               target="_blank"
//               sx={{ 
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <InstagramIcon fontSize="large" />
//             </IconButton>
//             <IconButton 
//               aria-label="Twitter" 
//               href="https://x.com/selvataas"
//               target="_blank"
//               sx={{ 
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <TwitterIcon fontSize="large" />
//             </IconButton>
//           </Box>
//           <Button color="primary" variant="contained" onClick={handleOpen}>
//             Login
//           </Button>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Login
//               </Typography>
//               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 {/* Login form goes here */}
//                 <form>
//                   <div>
//                     <label>
//                       Email:
//                       <input type="email" name="email" />
//                     </label>
//                   </div>
//                   <div>
//                     <label>
//                       Password:
//                       <input type="password" name="password" />
//                     </label>
//                   </div>
//                   <Button type="submit" variant="contained" color="primary">
//                     Submit
//                   </Button>
//                 </form>
//               </Typography>
//             </Box>
//           </Modal>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// Header.propTypes = {
//   onSidebarOpen: PropTypes.func,
// };

// export default Header;
