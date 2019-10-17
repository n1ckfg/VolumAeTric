
uniform sampler2DRect SourceMap;

void main(void)
{
	vec4	Tx;
    
	Tx = gl_Color * texture2DRect( SourceMap, gl_TexCoord[0].st );
    
	gl_FragColor = Tx;
}
