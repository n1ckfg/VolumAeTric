
uniform	vec3	CameraViewLightPosition;

varying vec3 position;//CameraView
varying vec3 normal;


void main(void)
{
	vec3	normvec, vertexToLightSource, lightdirection;
    
	normvec = normalize( normal );
    
    vertexToLightSource = CameraViewLightPosition - position;
	lightdirection = normalize( vertexToLightSource );
    
	float diffuse = clamp( dot( lightdirection, normvec ), 0.0, 1.0 );
        
	vec4	pix = ( gl_Color * diffuse );
	gl_FragColor.xyz = pix.xyz;
	gl_FragColor.w = gl_Color.w;
}
