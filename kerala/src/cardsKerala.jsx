import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k from './image/img2.jfif';
import alap from './image/img1.jfif';
import mn from './image/img3.jfif';
import sv from './image/img4.jfif';
import w from './image/img5.jpg';
import v from './image/img6.jpg'
import { useState } from 'react';
import{Container,Row,Col} from 'react-bootstrap'
import commentContext ,{CommentProvider} from './componentProvider'

function CardsKerala() {
  const [title,setTitle]=useState("")
  const record=[
    {idno:1,title:'Kannur', description:"Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port", imageUrl:k},
    {idno:2,title:'Alapuzha', description:"It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. ", imageUrl:alap},
    {idno:3,title:'Munnar', description:" A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations ", imageUrl:mn},
    {idno:4,title:'Silent valley', description:"Silent Valley National Park is a national park in Kerala, India. It is located in the Nilgiri hills and has a core area of 89.52 km", imageUrl:sv},
    {idno:5,title:'Wayand', description:"Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush.", imageUrl:w},
    {idno:6,title:'Vagamon', description:"Vagamon is an Indian hill station and a revenue village located in Peerumedu Taluk of Idukki district", imageUrl:v},

    



  ]
  return (
    <>
    <br/>
    <Container style={{marginLeft:'100px'}}>
    <Row className='mb-3'>
      <Col>
      <input type='text' name='sh' onChange={(e)=>{
        setTitle(e.target.value)
      }} className='form-control' placeholder='type place name here'/>
      </Col>
        </Row>
        
        <Row>
       <Col>
       <Button variant='success' onClick={((e)=>{
        setTitle("")
       })}> 
        All
       </Button>
       </Col>
{
  record.length>0&&
  record.map((item)=>{
    return(
      <Col key={item.idno}>
        <Button variant='info' onClick={((e)=>{
          setTitle(item.title)
        })}>
             {item.title}
        </Button>
      </Col>
    )
  })
}
      </Row> 
      <br/> 
    <Row>

      {
        record.length>0?
        record.filter((rec)=>{
          return(
            rec.title.toLocaleLowerCase().match(title.toLocaleLowerCase())
          )
        })
        .map((list)=>{
          return(

          <Col lg={4} className='mb-2' key={list.idno}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={list.imageUrl}
            style={{height:'120px'}} />
            <Card.Body>
              <Card.Title>{list.title}</Card.Title>
              <Card.Text>
               {list.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          )
         

        })
         :""
      }
       
    </Row>
    </Container>
    </>
  );
}

export default CardsKerala;