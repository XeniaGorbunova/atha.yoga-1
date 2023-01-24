import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> ca066a9fa7b45197cdd54f58e79585a1c0eea196
import {
  Card, Divider, Grid, Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ellipse from '../../../assets/public/ellipse.png';
import ticket from '../../../assets/public/ticket.svg';

const MyLesson = ({ title, ticketsAmount }) => (
  <div style={{
    padding: '20px 24px 20px 20px',
    borderRadius: '16px',
    width: '480px',
    marginRight: '24px',
    marginBottom: '24px',
    background: `center / contain no-repeat url(${ticket})`,
    filter: 'drop-shadow(0px 8px 16px rgba(46, 60, 80, .08))',
  }}
  >
    <Link to="/">
      <MoreHorizOutlinedIcon color="disabled" sx={{ position: 'absolute', top: '5px', right: '15px' }} />
    </Link>
    <Stack
      direction="row"
      spacing={2}
    >
      <Grid container direction="column" gap="16px" width="217%">
        <div>
          <Typography
            variant="h6"
            paragraph
            sx={{
              fontSize: '18px',
              maxWidth: '271px',
              height: '43px',
              mb: '0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
        </div>
        <Grid item xs container direction="column">
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '13px', mb: '7px' }}>
            Ближайшее занятие:
          </Typography>
          <Grid item xs container>
            <DateRangeOutlinedIcon
              color="primary"
              size="small"
              sx={{ transform: 'translateY(-2px)', mr: '6px' }}
            />
            <Typography variant="body1" sx={{ mr: '13px' }}>
              Пн, 26 дек
            </Typography>
            <AccessTimeIcon
              color="primary"
              sx={{ transform: 'translateY(-2px)', mr: '6px' }}
            />
            <Typography variant="body1">
              14:00 - 15:30
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs container gap="6px" alignItems="center">
          <Avatar alt="name" src="avatar" />
          <Typography variant="body1">
            Виктор Васильев
          </Typography>
        </Grid>
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', position: 'relative' }} />
      <img src={ellipse} alt="" style={{ position: 'absolute', bottom: '0px' }} />
      <Grid container direction="column" gap="12px" alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="body1" sx={{ fontWeight: '500', textAlign: 'center' }}>
            Осталось посещений:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="primary">
            {ticketsAmount}
          </Typography>
        </Grid>
        <Grid item container direction="column" spacing={1} alignItems="center">
          <Typography variant="body2">
            Дата окончания:
          </Typography>
          <Typography color="primary" variant="body2" sx={{ fontWeight: '500' }}>
            31.12.2022 23:59
          </Typography>

        </Grid>
      </Grid>
    </Stack>
  </div>
);

export default MyLesson;
