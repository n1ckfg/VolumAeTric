
varying vec3 position;
varying vec3 normal;


void main(void)
{
	vec4	vWorld, vProjection;
	float	ang;
    
	vWorld = gl_ModelViewMatrix * gl_Vertex;
	vProjection = gl_ProjectionMatrix * vWorld;
	gl_Position = vProjection;
    
	position = vWorld.xyz;
	normal = gl_NormalMatrix * gl_Normal;
    
	gl_TexCoord[0] = gl_MultiTexCoord0;
	
	gl_FrontColor = gl_Color;
}
