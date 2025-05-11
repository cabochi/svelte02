import './app.css';
import { mount } from 'svelte';
import page from 'page';

import App from './App.svelte';
import Overview from './lib/Overview.svelte';
import Counter from './lib/TestCounter.svelte';

// Debug: Cek apakah target element ada
console.log('Target element:', document.getElementById('app'));

const target = document.getElementById('app');
if (!target) {
  document.body.innerHTML = '<h1>Error: Element #app tidak ditemukan</h1>';
  throw new Error("Element #app tidak ditemukan");
}

let currentInstance = null;

function render(Component) {
  if (currentInstance) currentInstance.$destroy();
  currentInstance = mount(Component, { target });
}

// Atur base path jika diperlukan (sesuaikan dengan environment)
// page.base('/folder-project');  // Uncomment jika deploy di sub-directory

// Daftar rute
page('/', () => {
  console.log('Routing ke /');
  render(App);
});

page('/overview', () => {
  console.log('Routing ke /overview');
  render(Overview);
});

page('/counter', () => {
  console.log('Routing ke /counter');
  render(Counter);
});

// Fallback untuk 404
page('*', (ctx) => {
  console.warn('Rute tidak ditemukan:', ctx.path);
  target.innerHTML = `
    <h1>404 - Halaman Tidak Ditemukan</h1>
    <p>Path: ${ctx.path}</p>
    <a href="/">Kembali ke Home</a>
  `;
});

// Inisialisasi router dengan konfigurasi
page.start({
  dispatch: true,  // Eksekusi route saat start
  hashbang: false  // Gunakan routing modern (tanpa #!)
});