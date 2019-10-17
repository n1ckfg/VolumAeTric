uniform sampler2DRect SourceMap;

void main(void)
{
	gl_FragColor = texture2DRect( SourceMap, gl_TexCoord[0].st );
}
