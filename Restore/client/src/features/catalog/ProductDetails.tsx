import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import { Button, Divider, Grid2, Table, TableBody, TableContainer, TextField, Typography } from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if(!product) 
    return <div>Loading...</div>

  return (
    <Grid2 container spacing={6} maxWidth='lg' sx={{mx: 'auto'}}> 
        <Grid2 size={6}>
            <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}}/>
        </Grid2>
        <Grid2 size={6}>
            <Typography variant="h3">{product.name}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography variant="h4" color="secondary">${(product.price / 100).toFixed(2)}</Typography>
            <TableContainer>
                <Table>
                    <TableBody>
                        Table goes here...
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid2 container spacing={2} marginTop={3}>
                <Grid2 size={6}>
                    <TextField variant="outlined" type="number" label='Quantity in basket'
                    fullWidth defaultValue={1}/>
                </Grid2>
                <Grid2 size={6}>
                    <Button color='primary' size="large" variant="contained" fullWidth>
                        Add to Basket
                    </Button>
                </Grid2>
            </Grid2>
        </Grid2>
    </Grid2>
  );
}
