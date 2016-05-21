# Resume Framework Ionic
## Apa itu Ionic ?
Ionic adalah sebuah framewok aplikasi mobile berbasis HTML5 yang dapat digunakan untuk mengembangkan apikasi mobile dengan teknologi web seperti HTML, CSS, dan Javascript. Dengan menggunakan Ionic, para developer web bisa membuat aplikasi lintas platform seperti untuk Android dan iOS.
## Ide Pembuatan Ionic
Sebelumnya, pendiri ionic ingin membuat gebrakan revolusioner dengan konsep mengubah konsep Write one Run Anywhere dengan satu base code berbasis javascript.
Ternyata, ketika ide ini disampaikan ke para programer Android atau iOS, ide ini tidak disambut hangat. Mengapa? karena tidak semua bisa dilakukan dengan teknologi web. Salah satunya adalah pemrograman Game di Smartphone yang memanfaatkan openGL ES atau aplikasi yang sangat tergantung Sensor. Dari sinilah pengembang Ionic akhirnya mempivot targetnya adalah untuk para programer web yang ingin membuat aplikasi mobile (biasanya aplikasi bisnis) tanpa harus belajar bahasa pemrograman lain.
## Kelebihan 
* Ionic Menggunakan lisensi Opensource
* Lebih ringan dibandingkan dengan framework lain ( jQuery Mobile, SenchaTouch )
* Dokumentasi yang baik dan Forum yang selalu aktif - forum.ionicframework.com
* Menggunakan AngularJS sebagai engine (Model,View,Controller)
* Cross-platform ( Android, iOS,Windows phone, BB, dkk )
## Kekurangan
* Target hanya untuk Android 4 dan ios 7 Keatas jika dipakai pada level bawah maka performansi akan turun.
* Perfomansi yang buruk untuk web dengan tingkat grafik yang tinggi seperti 3D atau menggunakan video (seperti facebook).
* Tidak memiliki semua plugin , terkadang anda harus memprogram sendiri.
* Susah untuk didebug karena plugin yang digunakan terkadang tidak muncul pada saat dijalankan sebagai web aplikasi.
## Struktur
Aplikasi ionic adalah aplikasi yang dibangun dengan Cordova dimana Cordova adalah paket html/css/js aplikasi yang dapat berjalan pada perangkat mobile dan desktop.Oleh karena itu ionic memiliki stuktur file yang sama seperti Cordova.

Skema arsitektur ionic framework :
![alt text](http://3.bp.blogspot.com/-rFs5sIhaoN4/Vh5JSkQUssI/AAAAAAAAEZQ/nxL24hmfyAY/s1600/ionic-architecture.png) 

* Direktori **platform** berisi iOS dan proyek Android. Secara umum, Anda tidak perlu bekerja di direktori ini kecuali Anda melakukan peretasan atau mungkin mengirimkan aplikasi Anda untuk produksi.
* **hooks** berguna untuk custom actions yang diambil sebagai aplikasi anda yang akan bergerak melalui proses pengembangan Cordova.
* **merges** digunakan untuk mengoverride file pada platform tertentu.
* **Plugins** adalah tempat dimana Cordova menyimpan plugin yang akan ditambahkan pada project anda. Plugin ditambahkan oleh perintah: *ionic plugin add {plugin}* 
* **SCSS** adalah file SASS aplikasi anda.
* **WWW** adalah tempat dimana aplikasi anda dibuat.
* **CSS** mengandung baik file CSS spesifik aplikasi Anda, atau SCSS file output yang dihasilkan.
* **IMG** tempat anda menaruh file gambar.
* **JS** pada ionic menjadi rumit karena dibagian yaitu *app.js , controllers.js , directives.js* 
* **LIB** tempat dimana ionic dan libary lainnya anda gunakan berada.
* **TEMPLATES** tempat berisi file yang digunakan sebagai view (MVC) untuk aplikasi anda berada.

![alt text](http://webdevtuts.in/wp-content/uploads/2016/01/ionic-framework-file-structure.png)


## Penggunaan
Untuk menggunakan Ionic framework pertama anda harus menginstal CLI ionic dengan npm:
* npm install -g ionic (ketik pada command promp)

Setelah itu anda dapat memulai menjalankan aplikasi dengan salah satu dari template awal yang tersedia dengan menggunakan command :
* ionic start myApp blank
* ionic start myApp tabs 
* ionic start myApp sidemenu

Anda juga bisa menggunakan Github atau URL codepen untuk memulai project dari contoh yang anda temukan. Selama proses pembuatan aplikasi pastikan untuk sering mengetes langsung pada device dimana project ditargetkan ( coba jalankan langsung pada mobile phonenya) dikarenakan bisa terdapat fitur-fitur yang dapat menurunkan tingkat perfomansi aplikasi (seperti lag atau bug).

Untuk mengetes langsung pada device yang ditargetkan dapat menggunakan command:
* ionic platform add ios 
* ionic platform add android

Lalu jalankan command *ionic run android* atau *ionic run ios* dengan kondisi device mobile phone telah terhubung dengan device dimana kita membuat project.
Untuk proses instalasi lebih lengkap anda dapat lihat di [sini](http://ionicframework.com/docs/guide/installation.html).

### Referensi 
* http://ionicframework.com/.

