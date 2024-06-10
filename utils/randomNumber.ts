export const getRandomNumber = () => {
    const min = 1000000;
    const max = 9000000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomInitQuestion = () => {
    return  [
        { 
          id: 1, 
          name: "Checkbox question",
          type : 1,
          initQuestion : [
             {
                id: getRandomNumber(),
                title : 'Answer checkbox 1',
                correctAnswer : false,
                points : 0
             },
             {
                id: getRandomNumber(),
                title : 'Answer checkbox 2',
                correctAnswer : false,
                points : 0
             }
          ]
          
        },
        { 
          id: 2, 
          name: "Radio question",
          type : 2,
          initQuestion : [
            {
               id: getRandomNumber(),
               title : 'Answer Radio 1',
               correctAnswer : false,
               points : 0
            },
            {
               id: getRandomNumber(),
               title : 'Answer Radio 2',
               correctAnswer : false,
               points : 0
            }
         ]

         },
        { 
          id: 3, 
          name: "Image question" ,
          type : 3,
          initQuestion : [
            {
               id: getRandomNumber(),
               image : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
               correctAnswer : false,
               points : 0
            },
            {
               id: getRandomNumber(),
               image : 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
               correctAnswer : false,
               points : 0
            }
         ]
        },
      ];
}

