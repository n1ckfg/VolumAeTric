
float LinearizeDepth( float z )
{
	float n = DepthParam.x;//near
	float f = DepthParam.y;//far
	float zz = (2.0 * n) / (f + n - z * (f - n));
	
	float	fogstart = gl_Fog.start;//0.8;
	float	fogdelta = gl_Fog.end - gl_Fog.start;//0.1;
	
	return clamp( ( zz - fogstart ) / fogdelta, 0.0, 1.0 );
}


float lookup( vec2 offSet )
{
    // Values are multiplied by ShadowCoord.w because shadow2DProj does a W division for us.
    return shadow2DProj( ShadowMap, ShadowCoord + vec4(offSet.x * xyPixelOffset.x * ShadowCoord.w, offSet.y * xyPixelOffset.y * ShadowCoord.w, 0.0, 0.0) ).w;
}
