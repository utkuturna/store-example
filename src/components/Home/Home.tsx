import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Home() {
    return (
    <div>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3}>
                    FILTER MENU
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    PRODUCT LIST
                </Grid>
            </Grid>
        </Container>
    </div>
    );
}