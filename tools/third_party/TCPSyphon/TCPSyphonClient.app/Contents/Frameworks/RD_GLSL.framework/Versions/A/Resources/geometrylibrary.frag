
//Torus
float torus(in vec3 p, in vec2 t){
	vec2 q = vec2(length(vec2(p.x,p.z))-t.x, p.y);
	return length(q) - t.y;
}


//Sphere
float sphere(in vec3 p, float radius){
	p.y -= 1.0;
	float length = sqrt(p.x*p.x + p.y*p.y + p.z*p.z);
	return length-radius;
}