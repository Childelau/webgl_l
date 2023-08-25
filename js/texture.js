function texture() {
    const texture = gl.createTexture()//创建纹理图像缓冲区
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)//纹理图片上下反转
    gl.activeTexture(gl.TEXTURE0)//激活0号纹理单元TEXTURE0
    gl.bindTexture(gl.TEXTURE_2D, texture)//绑定纹理缓冲区
    //设置纹理贴图填充方式(纹理贴图像素尺寸大于顶点绘制区域像素尺寸)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    //设置纹理贴图填充方式(纹理贴图像素尺寸小于顶点绘制区域像素尺寸)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    //设置纹素格式，jpg格式对应gl.RGB
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
    gl.uniform1i(u_Sampler, 0)//纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
    // 进行绘制
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}