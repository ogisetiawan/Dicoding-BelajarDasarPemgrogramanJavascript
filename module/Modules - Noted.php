<?php
//@ Fundamental Javascript
//~ BigInt
//? digunakan untuk data yang bersekala lebih besar ( kriptografi)
//? gunakan huruf 'n' diakhir kata
//~ Symbol
//? Symbol ini umumnya digunakan sebagai nama property dari Object

//@ Struktur Data
//~ Spread Operator
//? Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). 
//~ Destructuring Object & Array
//? kumpulan object dan Array JSON, membantu dalam penamaan sebuah object ketika dipanggil
//~ Map
//? Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object
//~ Set
//? Set adalah merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks

//@ Function
//~ Fungsi
//? sebagai blok kode atau prosedur yang dapat digunakan secara berulang / merupakan sebuah variabel yang berisi blok logika
//~ Arrow function
//? fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ) dan lebih singkat
//~ Clousure
//? Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya (fungsi bersarang)

//@ OOP
//? Object Oriented Programming
//? Prototype adalah properti internal yang akan selalu ada ketika sebuah objek dibuat. 
//~ Overiding Method & Construct
//? teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class
//~ Object composition
//? prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class
//~ Built-in Class
//? proses manipulasi class bawaan javascript

//@ Functional Programming
//? jadi berfokus pada what to solve mau menggunakan gaya apa saja, yang penting ringkas
//~ Pure Function
//? merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya
//~ Array Foreach
//? Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array

//@ Setup Enviorenment
//? JavaScript dapat berjalan di berbagai platform tidak hanya brwoser bisa nodejs
//~ Node.js Feature
//? Asynchronous & Event-driven : tidak memblokir proses lain sembari menunggu satu proses selesai
//? Very Fast : karena berjalan pada V8 JavaScript Engine dari Google Chrome.
//? Single Threaded but Highly Scalable : model single thread dengan event looping
//? Oleh karena itu, karakteristik Node yang asynchronous dan single thread dirancang untuk memungkinkan implementasi server yang dapat menangani banyak request pada waktu yang sama.
//~ Export & Import
//? Modul bekerja dengan cara exporting dan importing nilai, jadi bisa dipakai di module js

//@ Concurency
//? beberapa komputasi yang terjadi pada saat yang bersamaan
//~ Synchronous vs Asynchronous
//? Sync ; proses menjalankan baris code secara beruurutan, proses yang paling pertama akan di excuete pertama
//? Async ; proses menjalankan baris code secara bersamaan, proses yang paling lama akan terkahir
//~ Callback
//? dibutuhkan untuk mendapatkan nilai yang berasal dari asynchronous function
//~ Callback hell
//? karena banyak sekali callback function yang bersarang karena saling membutuhkan satu sama lain
//~ Promise
//? sebuah objek yang digunakan untuk membuat sebuah komputasi (kode) ditangguhkan dan berjalan secara asynchronous .then / catch
//? gunakan promise pada proses ascy berantai

//@ NPM
//? sebuah package manager untuk membantu membuat web app dalam javascript
//? untuk minginstall package secara global npm install -g [nama-package]
//? --save-dev untuk memasang devDependencies (jadi didalam folder node_module ada bbrpa dependecies )
//? npx ; code package manager dapat menjalankan package yang sudah terpasang ataupun belum melalui sebuah perintah Terminal tanpa harus membuat script runner terlebih dahulu.

//@ JAVASCRIPT TESTING
//? Static Test : memastikan tidak ada typo 
//? Unit test; memastikan setiap unit kode yg ditulis sudah berjalan dgn baik
//? Integration test; Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya
//? End-to-End test; sebuah aplikasi untuk menguji flow dari awal hingga akhir
