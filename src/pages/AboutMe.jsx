import {
   Box,
   Typography,
   Button,
   Grid,
   Card,
   CardContent,
   CardActions,
} from "@mui/material";

const projects = {
   htmlCss: [
      {
         title: "Інтернет магазин",
         url: "https://github.com/veneracode/layout_landing-page.git",
      },
   ],
   javascript: [
      {
         title: "Калькулятор",
         url: "https://github.com/oleksandrkoval63/js-DOM1",
      },
      {
         title: "Next.js",
         url: "https://next-js-practic-six.vercel.app/users",
      },
   ],
   react: [
      {
         title: "Favorite Books",
         url: "https://github.com/oleksandrkoval63/react-redux-new",
      },
      {
         title: "Хлібобулочний магазин Chikery",
         url: "https://chikery-bv177s0wb-burito228s-projects.vercel.app",
      },
   ],
};

const AboutMe = () => {
   return (
   <div>
      <Box sx={{ px: 4, py: 6, background: "#fff3e0" }}>
   <Typography variant="h4" gutterBottom sx={{ color: "#e65100" }}>
      Про мене
   </Typography>
   <Typography variant="body1" sx={{ color: "#bf360c" }}>
      Привіт! Мене звати Іван. Я — фронтенд-розробник, якому подобається створювати зрозумілі, зручні та ефективні інтерфейси. Люблю вчитись і розв'язувати нестандартні задачі.
   </Typography>
   <Typography variant="body1" sx={{ color: "#bf360c", mt: 2 }}>
      🎯 Мені близькі такі цінності як чесність, відкритість і командна робота. Особливу увагу приділяю якості коду та продуманій архітектурі. Найбільше захоплююсь екосистемою React.
   </Typography>
   <Typography variant="body1" sx={{ color: "#bf360c", mt: 2 }}>
      📚 Навчаюсь за спеціальністю "Комп'ютерні науки" та постійно вдосконалюю знання JavaScript, TypeScript, React, а також суміжних технологій. У вільний час працюю над власними проєктами, вивчаю дизайн, читаю та мандрую.
   </Typography>

   <Typography variant="h5" sx={{ mt: 6, mb: 2, color: "#e65100" }}>
      Мої проєкти
   </Typography>

         {Object.entries(projects).map(([category, repos]) => (
            <Box key={category} sx={{ mt: 4 }}>
               <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#e65100" }}
               >
                  {category === "htmlCss"
                     ? "HTML + CSS"
                     : category === "javascript"
                     ? "JavaScript"
                     : "React"}
               </Typography>

               <Grid container spacing={2} justifyContent="center">
                  {repos.map((repo, index) => (
                     <Grid item xs={12} md={6} key={index}>
                        <Card
                           sx={{
                              width: 300,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              minHeight: 200,
                              background:
                                 "linear-gradient(135deg, #ff7043, #ffab91)", // оранжевий градієнт
                              color: "white",
                              borderRadius: 3,
                              boxShadow:
                                 "0 4px 20px rgba(255, 112, 67, 0.3)",
                              transition: "transform 0.3s ease",
                              "&:hover": {
                                 transform: "scale(1.03)",
                                 boxShadow:
                                    "0 6px 25px rgba(255, 112, 67, 0.5)",
                              },
                           }}
                        >
                           <CardContent sx={{ flexGrow: 1 }}>
                              <Typography variant="h6">
                                 {repo.title}
                              </Typography>
                           </CardContent>
                           <CardActions sx={{ justifyContent: "center" }}>
                              <Button
                                 size="small"
                                 color="#fff"
                                 href={repo.url}
                                 target="_blank"
                                 rel="noopener"
                              >
                                 GitHub
                              </Button>
                           </CardActions>
                        </Card>
                     </Grid>
                  ))}
               </Grid>
            </Box>
         ))}
      </Box>
   </div>
);

};

export default AboutMe;
