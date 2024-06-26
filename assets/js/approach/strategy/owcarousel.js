var arr = [

['Tanpa Kemiskinan','Mengakhiri Kemiskinan Dalam Segala Bentuk di Manapun','https://sdgs.un.org/goals/goal1'],
['Tanpa Kelaparan','Menghilangkan Kelaparan, Mencapai Ketahanan Pangan dan Gizi yang Baik, serta Meningkatkan Pertanian Berkelanjutan','https://sdgs.un.org/goals/goal2'],
['Kehidupan Sehat dan Sejahtera','Menjamin Kehidupan yang Sehat dan Meningkatkan Kesejahteraan Seluruh Penduduk Semua Usia','https://sdgs.un.org/goals/goal3'],
['Pendidikan Berkualitas','Menjamin Kualitas Pendidikan yang Inklusif dan Merata serta Meningkatkan Kesempatan Belajar Sepanjang Hayat untuk Semua','https://sdgs.un.org/goals/goal4'],
['Kesetaraan Gender','Mencapai Kesetaraan Gender dan Memberdayakan Kaum Perempuan','https://sdgs.un.org/goals/goal5'],
['Air Bersih dan Sanitasi Layak','Menjamin Ketersediaan serta Pengelolaan Air Bersih dan Sanitasi yang Berkelanjutan untuk Semua','https://sdgs.un.org/goals/goal6'],
['Energi Bersih dan Terjangkau','Menjamin Akses Energi yang Terjangkau, Andal, Berkelanjutan dan Modern untuk Semua','https://sdgs.un.org/goals/goal7'],
['Pekerjaan Layak dan Pertumbuhan Ekonomi','Meningkatkan Pertumbuhan Ekonomi yang Inklusif dan Berkelanjutan, Kesempatan Kerja yang Produktif dan Menyeluruh, serta Pekerjaan yang Layak untuk Semua','https://sdgs.un.org/goals/goal8'],
['Industri, Inovasi dan Infrastruktur','Membangun Infrastruktur yang Tangguh, Meningkatkan Industri Inklusif dan Berkelanjutan, serta Mendorong Inovasi','https://sdgs.un.org/goals/goal9'],
['Berkurangnya Kesenjangan','Mengurangi Kesenjangan Intra dan Antar Negara','https://sdgs.un.org/goals/goal10'],
['Kota dan Pemukiman yang Berkelanjutan','Menjadikan Kota dan Permukiman Inklusif, Aman, Tangguh dan Berkelanjutan','https://sdgs.un.org/goals/goal11'],
['Konsumsi dan Produksi yang Bertanggung Jawab','Menjamin Pola Produksi dan Konsumsi yang Berkelanjutan','https://sdgs.un.org/goals/goal12'],
['Penanganan Perubahan Iklim','Mengambil Tindakan Cepat untuk Mengatasi Perubahan Iklim dan Dampaknya','https://sdgs.un.org/goals/goal13'],
['Ekosistem Lautan','Melestarikan dan Memanfaatkan Secara Berkelanjutan Sumber Daya Kelautan dan Samudera untuk Pembangunan Berkelanjutan','https://sdgs.un.org/goals/goal14'],
['Ekosistem Daratan','Melindungi, Merestorasi dan Meningkatkan Pemanfaatan Berkelanjutan Ekosistem Daratan, Mengelola Hutan Secara Lestari, Menghentikan Penggurunan, Memulihkan Degradasi lahan, serta Menghentikan Kehilangan Keanekaragaman Hayati','https://sdgs.un.org/goals/goal15'],
['Perdamaian, Keadilan dan Kelembagaan yang Tangguh','Menguatkan Masyarakat yang Inklusif dan Damai untuk Pembangunan Berkelanjutan, Menyediakan Akses Keadilan untuk Semua, dan Membangun Kelembagaan yang Efektif, Akuntabel, dan Inklusif di Semua Tingkatan','https://sdgs.un.org/goals/goal16'],
['Kemitraan Untuk Mencapai Tujuan','Menguatkan Sarana Pelaksanaan dan Merevitalisasi Kemitraan Global untuk Pembangunan Berkelanjutan','https://sdgs.un.org/goals/goal17']

]



var owlChild = $('.owl-carousel');
owlChild.owlCarousel({
    center: true,
    nav: false,
    loop: true,
    responsive: {
        0: {
            items: 3,
            margin: 16,
            stagePadding: 32
        },
        768: {
            items: 4,
            margin: 16,
            stagePadding: 32
        },
        992: {
            items: 5,
            margin: 32,
            stagePadding: 64
        },
        1200: {
            items: 6,
            margin: 32,
            stagePadding: 64
        }
    },
    onDragged: callback
});
function callback(event) {
    var id = $('.owl-item.center').find('div').attr('data-id');
    owlChange(id);
}
$('.unsdg .dropdown-item').click(function(event){
    var id = $(this).index()+1;
    owlChild.trigger('to.owl.carousel', id-1);
    owlChange(id);
});

function owlChange(e){
    var id = e;
    var val = $('.unsdg .dropdown-menu .dropdown-item:nth-child('+id+')').text();
    $('.unsdg .dropdown-toggle').text(val);
    $('.unsdg-text').text(arr[id-1][1]);
    $('.findmore').attr('href', arr[id-1][2]);
}

$('.owlPrev').click(function(){
    owlChild.trigger('prev.owl.carousel');
    callback();
});

$('.owlNext').click(function(){
    owlChild.trigger('next.owl.carousel');
    callback();
});

owlChange(1);
