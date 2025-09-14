import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  const values = [
    {
      title: "Équité",
      description: "Nous traitons tous nos bénéficiaires avec égalité d’accès à nos aides et nos agents travaillent aussi jouissant tous d’un leadership collectif."
    },
    {
      title: "Honnété",
      description: "Nous croyons que l’honnêteté est la plus grande qualité d’un humanitaire, sans laquelle, celui-ci ne saura apporter assistance à la vraie cible du projet et manquera à atteindre l’ultime objectif de son action."
    },
    {
      title: "Redevabilité",
      description: "Dans toutes nos interventions, nous prenons en compte les opinions des différentes parties prenantes en leur donnant la possibilité de nous demander de compte sur la prise de décision ou les actions les concernant."
    },
    {
      title: "Transparence",
      description: "Les agents de LUCODER communiquent ouvertement tous les processus des activités du projet et doivent s’assurer que toutes les informations pertinentes sont transmises de façon adéquate aux personnes touchées par la crise et aux autres parties prenantes."
    },
    {
      title: "Impartialité",
      description: "LUCODER mène son action humanitaire ou de développement, sur la seule base des besoins prioritaires, en donnant priorité aux cas de détresses les plus urgents sans distinction de nationalité, de race, de croyance religieuse, des origines, de classe ou d’opinion politique."
    },
  ];

  const objectives = [
    "Réduire la délinquance juvénile par la formation, l'encadrement et la création d'opportunités locales",
    "Lutter contre l'exode rural en renforçant les moyens de subsistance en milieu rural",
    "Renforcer l'accès à l'éducation et aux soins de santé pour les familles vulnérables",
    "Apporter une aide rapide aux victimes des conflits armés et catastrophes naturelles",
    "Promouvoir la paix, la cohésion sociale et la résilience communautaire",
    "Promouvoir l'autonomisation et l'inclusion des femmes, jeunes et personnes marginalisées",
    "Renforcer la protection et promotion des droits humains",
    "Contribuer à la protection de l'environnement et préservation des écosystèmes locaux"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Histoire */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">« LUCODER une semence d'espoir née au cœur du chaos »</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed space-y-4">
              <p>
                C'était en 1996, dans les hautes collines verdoyantes du Kivu, que le destin de nombreuses vies allait discrètement changer. Deux ans après le déclenchement de la guerre intercommunautaire de Ntoto à cheval entre les territoires de Masisi et Walikale et après l'arrivée massive des réfugiés rwandais fuant le génocide de 1994, l'Est du Zaïre (aujourd'hui RDC) restait profondément bouleversé par les conflits interethniques, les déplacements des populations, la pauvreté et la montée inquiétante de la délinquance juvénile.
              </p>
              <p>
                Un homme, Raphaël VAYIKERYE SYAVULIVWA LYUVA, fils de la terre et témoin direct de ces douleurs, ne pouvait rester indifférent. Il voyait des enfants livrés à eux-mêmes dans les rues de Goma, des familles entières forcées d'abandonner leurs villages, et des jeunes sans repères se lançaient dans la violence ou l'exil.
              </p>
              <p>
                C'est ainsi qu'il eut une idée simple mais puissante : créer une structure locale capable d'apporter une réponse immédiate aux besoins des plus vulnérables, tout en s'attaquant aux causes profondes de la misère. Le 31 janvier 1996, lui et ses collaborateurs fondarent une association sans but lucratif denomée Lutte Contre la Délinquance et l'Exode Rural - LUCODER.
              </p>
              <p>
                Aujourd'hui, 29 ans plus tard, l'histoire de LUCODER continue d'être écrite, portée par l'héritage visionnaire de son fondateur et par la résilience des communautés qu'elle soutient. Là où beaucoup voyaient un terrain de guerre, LUCODER a vu une terre à cultiver. Une terre où peut pousser la paix.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission et Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Promouvoir la stabilité communautaire et l'autonomisation des jeunes en luttant contre la délinquance, l'exode rural et la pauvreté, à travers des actions intégrées d'agriculture, d'éducation, de santé, d'entrepreneuriat et de protection des populations affectées par les conflits et des catastrophes naturelles à l'Est de la République Démocratique du Congo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Notre Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Rassembler les gens, les idées et les actions de façon durable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Notre Cible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Les femmes, jeunes et autres personnes marginalisées (personnes à besoin spécifique, peuples autochtones pygmées, survivants des Violences Basées sur le genre, déplacés/retournés, réfugiés, personnes vivant avec le VIH/Sida, ex-combattants, …).
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objectifs stratégiques */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nos objectifs stratégiques</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nos valeurs */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Nos valeurs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
