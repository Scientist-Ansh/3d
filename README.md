## Steps implemented to optimize the model

- The model was scaled down in blender.
- All the texture of the model were 4k they were resized to 1k using gltf.report
- Draco compression was also applied to the model.
- Texture of the model was not very detailed so they were also converted to jpeg and the quality was still good.
- The model alread had less vertices but 3 meshes were still combined to 1 mesh. Now total vertices in the model is 94,433 and total objects 13. some meshes can further be combined to reduce the draw calls but I am not sure what more things I will do with model so they were not combined as of now.

- Back face culling was also enabled using blender because theres nothing to see inside the model body, moreover the windows are not transparent enough to see through so it made sense to enable it. 