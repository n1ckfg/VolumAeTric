
uniform sampler2D SourceMap;

void main(void)
{
	vec4	Tx;
    
	Tx = gl_Color * texture2D( SourceMap, gl_TexCoord[0].st );
    
	gl_FragColor = Tx;
}
