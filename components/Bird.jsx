import Matter from "matter-js";

const Bird = props = {

    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color;

    return(
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}/>
    )

}

export default ( world, color, pos, size ) => {
   const initialBird = Matter.Bodies.rectangle(//Cria um corpo retangular no motor de física.
       pos.x, //onde o corpo começa na tela.
       pos.y, //onde o corpo começa na tela.
       size.width,//tamanho do corpo.
       size.height,//tamanho do corpo.
       {label: 'Bird'}// opções físicas, nesse caso só o "nome"
   )

   
   Matter.World.add(world, initialBird)//é o "mundo" da física criado pelo Matter.Engine.create().

   return {
       body: initialBird,
       color,
       pos,
       renderer: <Bird/>
   }

}