import React,{Component} from 'react';
  
import classes from './App.module.css';
import ProductData from './ProductData/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetail from './ProductData/productDetail';
import Topbar from './Topbar/Topbar';


class App extends Component{
  state ={
    ProductDetail: ProductDetail,
    currentPreviewImagePos: 0,
    showHeart: false
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos})
  }
  onFeatureItemClick=(pos) =>{
    let updatedState = false;
    if(pos ===1){
      updatedState = true;
    }
    this.setState({showHeart:updatedState});
  }


   render(){
    return (
      <div className="App">
          <Topbar/>
        <div className={classes.MainContainer}>
          <div className ={classes.ProductPreview}>
           <ProductPreview 
             currentPreviewImage={this.state.ProductDetail.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
             showHeart={this.state.showHeart}            
             />
          </div>
            <ProductData 
            data={this.state.ProductDetail} 
            onColorOptionClick ={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            showHeart={this.state.showHeart}
            />
        </div>
      </div>
    );

   }


}

export default App;
