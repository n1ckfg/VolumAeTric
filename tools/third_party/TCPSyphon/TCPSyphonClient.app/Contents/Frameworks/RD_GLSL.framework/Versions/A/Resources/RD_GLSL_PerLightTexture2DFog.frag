
uniform sampler2D SourceMap;
uniform float	LightPow;
uniform vec3	DepthParam;
uniform	vec3	CameraViewLightPosition;

varying vec3 position;//CameraView
varying vec3 normal;


float LinearizeDepth( float z )
{
	float n = DepthParam.x;//near
	float f = DepthParam.y;//far
	float zz = (2.0 * n) / (f + n - z * (f - n));
	
	float	fogstart = gl_Fog.start;//0.8;
	float	fogdelta = gl_Fog.end - gl_Fog.start;//0.1;
	
	return clamp( ( zz - fogstart ) / fogdelta, 0.0, 1.0 );
}


void main(void)
{
	vec3	normvec, vertexToLightSource, lightdirection;
    
	normvec = normalize( normal );
    
    vertexToLightSource = CameraViewLightPosition - position;
	lightdirection = normalize( vertexToLightSource );
    
	float diffuse = clamp( dot( lightdirection, normvec ), 0.0, 1.0 );
    
	diffuse = pow( diffuse, LightPow );
    
	float	fog = LinearizeDepth( gl_FragCoord.z );
    
	vec4	tex = texture2D( SourceMap, gl_TexCoord[0].st );
	vec4	pix = ( gl_Color * diffuse ) * tex;
	gl_FragColor.xyz = mix( pix.xyz, gl_Fog.color.xyz, fog );
	gl_FragColor.w = tex.w * gl_Color.w;
}
