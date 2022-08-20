## Steps for building the project
1. All the models were made customly in blender.
2. Optimization was not required for the models as they are already low poly but below I have explained the steps I would take if working with a complex model.
3. An HDRI image is being used to light the scene.
4. The earth rotating has a PBR mesh applied to it. (normal, roughness/ambient occlusion, colormap). (Note- this mesh is commented out and I use the blue color now)
5. Project has camera parallax on mouse move.
6. It has interaction when plane is clicked, plane will change its location and blade rotation speed will change.
7. You can also control the movement of the plane by using the hand gestures.
8. It also has 2 directional lights to mimic day and night. I wa susing points lights before but they were bad for performance so I switched to directional lights.
9. The directional lights also cast shadows. Plane and clouds cast shadows and the sea receives the shadows.
10. The code also has a feature to control the plane's height by using hand gestures. This component has been commented out for now. But it works fine.


## Why this project.
- I wanrted to build something from scratch on my own. I could have picked a model from internet but that did not excite me much after I saw this Aviator game online.
- I love mixing things together, from the start I wanted to do something with Machine Learning and 3D combined.
- I made the hand gestures to control the plane but they do not feel natural right now but I iwll say its a good start.
- I wish to complete this project and use it in my portfolio because everything is here is build from scratch by me so it represents my skills in a way.

## Things I would want to add-
I would make a very basic game out of this project. 
It would 3 navigation options which user can toggle accroding to presference - mouse, keyboard or hand gestures.

## Steps to optimize a model
- Make sure you do not choose a really big model > 500,000 vertices.
- check the scale of a model and apply a lower scale if its too big.
- Also you can re position the model based on what you would do with it. 
- Now, you can check the textures of the model, if they are really big reduce them down also check if you need png or jpeg will work.
- Draco compression can also be applied to the model.
- YOu can also combine the meshes now that you know you would want to animate together or will not use this will reduce the draw calls.

- Advanced technique like back face culling can be applied as well if the inside of model is not visible.
