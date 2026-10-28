import { redirect } from 'next/navigation';

export default function QRRedirect() {
  // Change this URL anytime you want the QR code to go somewhere else
  redirect('/connect');
}