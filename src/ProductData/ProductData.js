//import react from "react";
import classes from './ProductData.module.css';

const ProductData = (props) =>{
  
  const colorOptions = props.data.colorOptions.map((item,pos)=>{

    const classArr =[classes.ProductImage]
    if(pos === props.currentPreviewImagePos){
      classArr.push(classes.SelectedProductImage);
    }
    return(
      <img 
      key={pos} 
      className ={classArr.join(' ')} 
      src={item.imageUrl} 
      alt={item.styleName} 
      onClick={() => props.onColorOptionClick(pos)}/>
 
    )
  })

  const featureList = props.data.featureList.map((item,pos)=>{

    const classArr =[classes.FeatureItem];
    if(pos === 1 && props.showHeart){
      classArr.push(classes.SelectedFeatureItem);
    }else if(pos === 0 && !props.showHeart){
      classArr.push(classes.SelectedFeatureItem);
    }
    return(
      <button 
      key={pos} 
      className={classArr.join(' ')}
      onClick={() => props.onFeatureItemClick(pos)}
      >
        {item}
      </button>
    )
  })


    return(
     <div className ={classes.ProductDetail}>
          <h1 className ={classes.ProductDataTitle}>{props.data.title}</h1>
          <p className={classes.ProductDataDescription}>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
            {colorOptions}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
             {featureList}  
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
      </div>
    )

}


/*
              <img className ={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src={"https://imgur.com/iOeUBV7.png"} alt="Black Color Watch"></img>
              <img className ={classes.ProductImage} src={"https://imgur.com/PTgQlim.png"} alt="Red Color Watch"></img>
              <img className ={classes.ProductImage} src={"https://imgur.com/Mplj1YR.png"} alt="Blue Color Watch"></img>
              <img className ={classes.ProductImage} src={"https://imgur.com/xSIK4M8.png"} alt="Purple Color Watch"></img>

              <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
              <button className={classes.FeatureItem}>Heart Rate</button>
*/
export default ProductData;