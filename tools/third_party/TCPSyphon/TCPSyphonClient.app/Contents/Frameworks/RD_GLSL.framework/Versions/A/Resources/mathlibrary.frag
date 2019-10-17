
#define hsv(h,s,v) mix(vec3(1.), clamp((abs(fract(h+vec3(3., 2., 1.)/3.)*6.-3.)-1.), 0., 1.), s)*v



// Return rotation matrix for rotating around vector v by angle
mat3 rotationMatrixVector(vec3 v, float angle)
{
    float c = cos(radians(angle));
    float s = sin(radians(angle));
    
    return mat3(c + (1.0 - c) * v.x * v.x, (1.0 - c) * v.x * v.y - s * v.z, (1.0 - c) * v.x * v.z + s * v.y,
              (1.0 - c) * v.x * v.y + s * v.z, c + (1.0 - c) * v.y * v.y, (1.0 - c) * v.y * v.z - s * v.x,
              (1.0 - c) * v.x * v.z - s * v.y, (1.0 - c) * v.y * v.z + s * v.x, c + (1.0 - c) * v.z * v.z);
}


mat3 rotate(float fAngle,float x,float y,float z,mat3 m)
{
	float a00=m[0].x,a01=m[0].y,a02=m[0].z,
		a10=m[1].x,a11=m[1].y,a12=m[1].z,
		a20=m[2].x,a21=m[2].y,a22=m[2].z;

	float fTheta=radians(fAngle);

	float s=sin(fTheta);
	float c=cos(fTheta);

	float t=1.0-c;

	float b00=x*x*t+c,b01=y*x*t+z*s,b02=z*x*t-y*s,
		b10=x*y*t-z*s,b11=y*y*t+c,b12=z*y*t+x*s,
		b20=x*z*t+y*s,b21=y*z*t-x*s,b22=z*z*t+c;

	return mat3(
		a00*b00+a10*b01+a20*b02,a01*b00+a11*b01+a21*b02,a02*b00+a12*b01+a22*b02,
		a00*b10+a10*b11+a20*b12,a01*b10+a11*b11+a21*b12,a02*b10+a12*b11+a22*b12,
		a00*b20+a10*b21+a20*b22,a01*b20+a11*b21+a21*b22,a02*b20+a12*b21+a22*b22);
}


vec3 rotatey(vec3 r, float v)
{
	return vec3(r.x*cos(v)+r.z*sin(v),r.y,r.z*cos(v)-r.x*sin(v));
}

vec3 rotatex(vec3 r, float v)
{
	return vec3(r.y*cos(v)+r.z*sin(v),r.x,r.z*cos(v)-r.y*sin(v));
}


vec3 RotateX( const in vec3 vPos, const in float fAngle )
{
	float s = sin(fAngle);
	float c = cos(fAngle);
	
	vec3 vResult = vec3( vPos.x, c * vPos.y + s * vPos.z, -s * vPos.y + c * vPos.z);
	
	return vResult;
}
 
vec3 RotateY( const in vec3 vPos, const in float fAngle )
{
	float s = sin(fAngle);
	float c = cos(fAngle);
	
	vec3 vResult = vec3( c * vPos.x + s * vPos.z, vPos.y, -s * vPos.x + c * vPos.z);
	
	return vResult;
}
     
vec3 RotateZ( const in vec3 vPos, const in float fAngle )
{
	float s = sin(fAngle);
	float c = cos(fAngle);
	
	vec3 vResult = vec3( c * vPos.x + s * vPos.y, -s * vPos.x + c * vPos.y, vPos.z);
	
	return vResult;
}

////////////////////

/*
//ディスプレイ座標(gl_FragCoord.z)から０〜１のリニアに変換
float LinearizeDepth( float z )
{
  float n = 0.1; // camera z near
  float f = 13.0; // camera z far
  return (2.0 * n) / (f + n - z * (f - n));	
}
*/