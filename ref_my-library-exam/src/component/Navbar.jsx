import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <Grid container direction="row"
        sx={{
            px: "20px",
            py: "10px",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        className="nav-bar">
        <div className="nav-title"><h2>코딩 알려주는 누나 도서관</h2></div>
        <Grid container direction="row" className="menu-bar" spacing={2}>
            <Grid><Link to="/">메인</Link></Grid>
            <Grid><Link to="/mybook">나의 책</Link></Grid>
            <Grid><Link to="/login">로그인</Link></Grid>
        </Grid>
    </Grid>
  )
}

export default Navbar
