## Steps for building the project
1. All the models were made customly in blender.
2. Optimization was not required for the models as they are already low poly but below I have explained the steps I would take if working with a complex model.
3. An HDRI image is being used to light the scene.
4. The eath rotating has a PBR mesh applied to it. (normal, roughness/ambient occlusion, colormap) . These are alos rotated to get better quality.
5. Project has camera parallax on mouse move.
6. It has interaction when plane is clicked, plane will change its location and blade rotation speed will change.
7. You can also control the movement of the plane by using the hand gestures.


## Why this project.



## Steps to optimize a model
- Make sure you do not choose a really big model > 500,000 vertices.
- check the scale of a model and apply a lower scale if its too big.
- Also you can re position the model based on what you would do with it. 
- Now, you can check the textures of the model, if they are really big reduce them down also check if you need png or jpeg will work.
- Draco compression can also be applied to the model.
- YOu can also combine the meshes now that you know you would want to animate together or will not use this will reduce the draw calls.

- Advanced technique like back face culling can be applied as well if the inside of model is not visible.
