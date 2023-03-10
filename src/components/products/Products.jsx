import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import apron from '../../assets/koreanApron.jpg';
import bathBomb from '../../assets/bathBomb.jpg';
import candle from '../../assets/candle.jpg';
import makeStyles from './styles';

const products = [
  { id: 1, name: "Korean Style Aprons", description: "One size fits all aprons", price: "$25", image: apron},
  { id: 2, name: "Scented Bath Bombs", description: "Bath Bombs made with Essential Oils", price: "$5", image: bathBomb },
  { id: 3, name: "Scented Candles", description: "Handmade candles made with Essential Oils", price: "$10", image: candle},
];

const Products = () => {
  const classes = makeStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))};
      </Grid>
    </main>
  );
};

export default Products;
 