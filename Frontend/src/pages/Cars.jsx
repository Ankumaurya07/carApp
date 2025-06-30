import useCars from '../hooks/useCars';
import CarCard from '../Home/CarCard';

const Cars = () => {
  const { cars, error } = useCars();

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="p-6 mt-20 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Explore Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
