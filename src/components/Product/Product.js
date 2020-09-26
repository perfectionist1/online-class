import React from 'react';
import { Jumbotron, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import './Product.css';

const Product = (props) => {
    //console.log(props.product);
    const {course_pic, course_title, price, instructor} = props.product;
    const courseStyle = {
        height: '90%',
        width: '50%'
    };
    return (
       
        <Jumbotron>
            <Card>                
                <div className="main">
                    <div className="first">
                        <CardImg style={courseStyle} src={course_pic} alt=""/>
                    </div>
                    <div className="second">
                        <CardBody>
                            <CardTitle><strong>CourseTitle:</strong> {course_title}</CardTitle>
                            <CardSubtitle><strong>Price:</strong>{price}</CardSubtitle>
                            <CardText><strong>Instructor: </strong>{instructor}</CardText>
                            <Button color="success" onClick={() => props.handleCart(props.product)}>Enrolled Now</Button>
                        </CardBody>
                    </div>
                </div>
            </Card>
        </Jumbotron>
            
    );
};

export default Product;