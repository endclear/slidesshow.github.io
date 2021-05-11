document.addEventListener("DOMContentLoaded",function(){
	//khai bao
	var nut = document.querySelectorAll('.chuyenslide ul li');//tra ve mot mang nut
	var slides = document.querySelectorAll('.cacslide ul li');
	var thoigian = setInterval(function(){autoSlide()},5000);
	//bat su kien click cho tung nut trong mang
	// autoSlide();
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			//huy tu chuyen dong 
			clearInterval(thoigian);
			//khi kich vao 1 nut bo het mau den ơ các nút còn lại
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			//them mau den o nut vua an
			this.classList.add('kichhoat');
			var nutkichhoat = this;
			var vitrinut =0;
			for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}
				// console.log('bien i: ' + i);
				// console.log('phan tu nut kichhoat la: '+ nutkichhoat);
			//het vong lap nay thi bien i se bang so thu tu
			// console.log('vi tri nut kick hoat la: '+ vitrinut );
			//buoc 1: cho tat ca slide an di = cach remove class active
			console.log(vitrinut);
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
				console.log(vitrinut);

			}

		})
	}//het su kien click

	
	//Viet ham tu chuyen slide
	function autoSlide(){
			//xem slide nao dang hien thi
			var vitri = 0;
			var slideHientai = document.querySelector('.cacslide ul li.active');

			for (vitri = 0; slideHientai=slideHientai.previousElementSibling; vitri++) {}
				console.log(vitri);
			//cho an het cac phan tu slide di
			if(vitri<(slides.length-1)){
				for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
				}
				//cho phan tu tiep theo cua slide hien thi ra
				slides[vitri].nextElementSibling.classList.add('active');
				nut[vitri].nextElementSibling.classList.add('kichhoat');
			}
			else{
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
					nut[i].classList.remove('kichhoat');
				}
				//cho phan tu tiep theo cua slide hien thi ra
				slides[0].classList.add('active');
				nut[0].classList.add('kichhoat');
			}
	}
	

	// showSlides();
	// function showSlides() {
	//   var i;
	//   for (i = 0; i < slides.length; i++) {
	//     slides[i].classList.remove('active');  
	//   }
	//   vitrinut2++;
	//   if (vitrinut2 > slides.length) {vitrinut2 = 1}    
	//   for (i = 0; i < nut.length; i++) {
	//     nut[i].classList.remove('kichhoat');
	//   }
	//   slides[vitrinut2-1].classList.add('active');  
	//   nut[vitrinut2-1].classList.add('kichhoat');
	//   setTimeout(showSlides, 5000); // Change image every 2 seconds
	// }

},false)