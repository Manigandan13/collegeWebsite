import Image from "next/image";
import cs4 from '../images/photos/y2.jpeg'

const FourthSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About SSS College</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-lg text-gray-700 leading-relaxed mb-8 md:mb-0">
            <p className="mb-4">
              SSS College, founded by A.K. Natarajan, Chairman of Arcot, is a premier center of higher learning focused on providing quality education to rural and underprivileged communities. Our mission is to foster excellence in education, complemented by strong human values.
            </p>
            <p className="mb-4">
              The college offers a dynamic environment for intellectual growth, encouraging free thinking and personal development. With accomplished faculty and diverse students, we equip our graduates with the skills and experiences needed to excel in society and contribute to global progress.
            </p>
            <p>
              Beyond academics, our students actively engage in sports, cultural activities, and social service. The campus is equipped with modern facilities, including state-of-the-art computer labs, a digital library, an auditorium, and sports fields, all designed to provide a well-rounded experience.
            </p>
          </div>
          <div className="relative">
            <Image
              src={cs4}
              alt="SSS College Campus"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-xl text-gray-800 font-semibold">
            SSS College offers students unique opportunities to shape their future in their chosen fields, preparing them to become responsible citizens and well-qualified professionals.
          </p>
        </div>
      </div>

      {/* Message from Chairman */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Message from the Chairman</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Since the rise of globalization, I’ve envisioned creating an institution that stands out by serving rural communities in the global arena. Today, global companies offer students rewarding job opportunities. But I stress two key points: parents must continue to mentor their children beyond college admission, and students must take initiative to unlock their full potential.
              </p>
              <p>
                At SSS College, we nurture and guide students to help them succeed. I am proud of the progress we have made, and I am confident our students will continue to thrive and contribute to society.
              </p>
              <p className="mt-8 text-lg font-semibold text-gray-900">A.K. Natarajan</p>
              <p className="text-lg text-gray-600">Chairman, SSS College</p>
            </div>
            <div className="relative">
              <Image
                src="/images/chairman.jpg" // Replace with the correct image path
                alt="Chairman"
                width={400}
                height={400}
                className="rounded-full shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FourthSection;
