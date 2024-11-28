import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { number } from 'yup';

interface Character {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

export const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );

        setCharacters(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
      } catch (error) {
        console.error('Ошибка загрузки данных', error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  return (
    <div>
      <h1>Персонажи</h1>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Рост</th>
            <th>Вес</th>
            <th>Пол</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Назад
        </button>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Вперёд
        </button>
      </div>
    </div>
  );
};

export default CharactersPage;
