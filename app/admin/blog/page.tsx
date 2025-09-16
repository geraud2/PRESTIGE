"use client";
import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaImage,
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaSearch,
  FaDownload,
} from "react-icons/fa";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AdminBlog() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ---------------- ARTICLES ----------------
  const articles = [
    {
      id: "ART-001",
      titre: "Comment devenir chauffeur VTC en 2024",
      slug: "devenir-chauffeur-vtc-2024",
      auteur: "Djibril KONE",
      categorie: "VTC",
      statut: "Publié",
      dateCreation: "2024-01-15",
      datePublication: "2024-01-20",
      vues: 1250,
      commentaires: 8,
      image:
        "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg",
      extrait:
        "Guide complet pour obtenir sa carte professionnelle VTC et lancer son activité...",
      tags: ["VTC", "Formation", "Réglementation"],
    },
    {
      id: "ART-002",
      titre: "Investir en Afrique : opportunités 2024",
      slug: "investir-afrique-opportunites-2024",
      auteur: "Ahmed BENALI",
      categorie: "Afrique",
      statut: "Brouillon",
      dateCreation: "2024-01-18",
      datePublication: null,
      vues: 0,
      commentaires: 0,
      image:
        "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg",
      extrait:
        "Analyse des secteurs porteurs et des pays les plus attractifs pour les investisseurs...",
      tags: ["Afrique", "Investissement", "Entrepreneuriat"],
    },
    {
      id: "ART-003",
      titre: "Location de véhicules : 5 conseils",
      slug: "location-vehicules-conseils",
      auteur: "Marie DUBOIS",
      categorie: "Location",
      statut: "Programmé",
      dateCreation: "2024-01-10",
      datePublication: "2024-01-25",
      vues: 0,
      commentaires: 0,
      image:
        "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg",
      extrait:
        "Nos astuces pour réduire vos coûts de location tout en gardant un service de qualité...",
      tags: ["Location", "Conseils", "Économies"],
    },
  ];

  // ---------------- RESSOURCES ----------------
  const ressources = [
    {
      titre: "Guide du VTC 2024",
      description: "Tout savoir pour devenir chauffeur VTC",
      type: "PDF",
      taille: "2.3 MB",
    },
    {
      titre: "Business Plan Location",
      description: "Modèle pour lancer une activité de location",
      type: "DOCX",
      taille: "1.1 MB",
    },
    {
      titre: "Réglementation VTC",
      description: "Résumé des lois et obligations VTC",
      type: "PDF",
      taille: "850 KB",
    },
  ];

  // ---------------- FILTRES ----------------
  const categories = [
    { id: "all", label: "Toutes", count: articles.length },
    {
      id: "vtc",
      label: "VTC",
      count: articles.filter((a) => a.categorie === "VTC").length,
    },
    {
      id: "location",
      label: "Location",
      count: articles.filter((a) => a.categorie === "Location").length,
    },
    {
      id: "formations",
      label: "Formations",
      count: articles.filter((a) => a.categorie === "Formations").length,
    },
    {
      id: "afrique",
      label: "Afrique",
      count: articles.filter((a) => a.categorie === "Afrique").length,
    },
  ];

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "Publié":
        return "bg-green-100 text-green-800";
      case "Brouillon":
        return "bg-gray-100 text-gray-800";
      case "Programmé":
        return "bg-blue-100 text-blue-800";
      case "Archivé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter(
          (a) => a.categorie.toLowerCase() === selectedCategory
        );

  // ---------------- RENDER ----------------
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* TON CODE DES ARTICLES (inchangé) */}

        {/* ---------------- SECTION RESSOURCES ---------------- */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Ressources & Documents
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ressources.map((ressource, index) => (
              <Card key={index} className="p-4 md:p-6">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7931E] rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <FaDownload className="text-xl md:text-2xl text-white" />
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold text-gray-900 mb-2">
                    {ressource.titre}
                  </h3>
                  <p className="font-body text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    {ressource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <span>{ressource.type}</span>
                    <span>{ressource.taille}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full text-sm md:text-base"
                  >
                    <FaDownload className="mr-1 md:mr-2" />
                    Télécharger
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
