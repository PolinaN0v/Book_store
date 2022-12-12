import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import "./Whatread.scss";



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Whatread = () => {
  return (
    <div>
      <h1 className='h1'>Что почитать?</h1>
      <section className='wrapper'>
        <Card className='card1' sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              weight="100px"
              image="https://phonoteka.org/uploads/posts/2021-07/1625611021_10-phonoteka-org-p-garri-potter-ron-i-germiona-art-krasivo-10.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Серия книг "Гарри Поттер"
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Гарри Поттер - история, от которой фанатеют миллионы поклонников, и столько же людей говорят,
                что никогда не возьмут в руки эту книгу...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              {/* <Link to="/whatread1/" className="link">
                Читать далее
              </Link> */}
          </CardActions>
        </Card>
        <Card className='card2' sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              weight="100px"
              image="https://phonoteka.org/uploads/posts/2021-05/1622469320_19-phonoteka_org-p-sherlok-kholms-knizhnii-art-krasivo-21.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Шерлок Холмс. Все повести и рассказы о сыщике № 1 сборник
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Шерлок Холмс – литературный персонаж, созданный талан-том английского писателя Артура Конан Дойла...
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <Link to="/whatread2/" className="link">
                Читать далее
              </Link> */}
        </Card>
        <Card className='card3' sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              weight="100%"
              image="https://img51994.domkino.tv/img/2018-09-24/fmt_117_24_master_margarita3.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              М.А. Булгаков "Мастер и Маргарита"
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Роман «Мастер и Маргарита» - произведение, в котором находят отражения философские,
              а значит вечные темы. Любовь и предательство, добро и зло, истина и ложь, поражают своей дуальностью,
              отражая противоречивость и, вместе с тем, полноту человеческой природы.
              Мистификация и романтизм, оформленные изящным языком писателя, подкупают глубиной мысли,
              требующей неоднократного прочтения...
              </Typography>
            </CardContent>
          </CardActionArea>
            {/* <Link to="/whatread3/" className="link">
              Читать далее
            </Link> */}
        </Card>
      </section>


      <h1 className='h1'>Новости</h1>
      <section className='wrapper'>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
              5 декабря 2022 г.
            </Typography>
            <Typography variant="h6" component="div">
              Важное книжное: детектив года и газлайтинг
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/news/" className="link">
              Читать далее
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="orange" gutterBottom>
              28 декабря 2022 г.
            </Typography>
            <Typography variant="h6" component="div">
            Важное книжное: ДР ВП, японские ужасы и чудеса маркетплейсов
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/news/" className="link">
              Читать далее
            </Link>
          </CardActions>
        </Card>


        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="teal" gutterBottom>
              21 ноября 2022
            </Typography>
            <Typography variant="h6" component="div">
            Важное книжное: шоу Цыпкина, дипфейки и «Проклятое дитя»
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/news/" className="link">
              Читать далее
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
              14 ноября 2022 г.
            </Typography>
            <Typography variant="h6" component="div">
            Важное книжное: Пелевин, Горшок и израильские учёные
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/news/" className="link">
              Читать далее
            </Link>
          </CardActions>
        </Card>
      </section>
    </div>
  )
}


export default Whatread