import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Questions.scss";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Как найти книгу?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Нажмите на "Каталог", находящийся в самом верху сайта
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Могут ли мои книги публиковаться под псевдонимом?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Да. Напишите его нам на почту imarket@booking.ru после того, как пришлете свою первую книгу.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Я прислал вторую книгу. Почему она не опубликована?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Книги публикуются согласно маркетинговому плану.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Как купить книги оптом?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Для оптовых закупок оформляйте заказ как юридическое лицо.
            <div className="" />
            В свою очередь мы предоставим вам все сопутствующие документы.
            <div className="" />
            Узнайте подробности о программе здесь или напишите нам на почту imarket@booking.ru.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Могут ли мои книги публиковаться под псевдонимом?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Да. Напишите его нам на почту imarket@booking.ru после того, как пришлете свою первую книгу.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Как вернуть деньги за заказ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            В соответствии с действующей политикой возврата товара,
            <div className="" />
            вам необходимо написать заявление на возврат денежных средств
            <div className="" />
            на нашу почту imarket@booking.ru.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


